from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from studio.api import permissions
from studio.models import Studio
from ..models import Reservation
from .serializers import ReservationSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from datetime import datetime, timedelta
from django.utils import timezone


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_reservation(request):
    serializer = ReservationSerializer(data=request.data)
    if serializer.is_valid():
        studio_id = request.data.get("studio")
        reserved_dates = request.data.get("reserved_dates")

        # Check for duplicate dates in the reserved_datess list
        if len(set(reserved_dates)) != len(reserved_dates):
            return Response(
                {"detail": "Duplicate dates are not allowed."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            studio = Studio.objects.get(id=studio_id)
        except Studio.DoesNotExist:
            return Response(
                {"detail": "Studio not found."}, status=status.HTTP_404_NOT_FOUND
            )

        # Check if reserved dates fall on working days of the studio
        for date_str in reserved_dates:
            reserved_date = datetime.strptime(date_str, "%Y-%m-%d")
            if reserved_date.strftime("%A") not in studio.working_days.split(","):
                return Response(
                    {
                        "detail": f"[{date_str} - {reserved_date.strftime('%A')}] is not a working day for the studio."
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

        studio_reservations = set(studio.reservations)
        common_dates = set(reserved_dates).intersection(studio_reservations)

        if common_dates:
            return Response(
                {"detail": "This date is already reserved for the studio."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        total_price = studio.price_per_day * len(reserved_dates)
        serializer.save(user=request.user, total_price=total_price)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_reservation(request, reservation_id):
    try:
        reservation = Reservation.objects.get(id=reservation_id)
    except Reservation.DoesNotExist:
        return Response(
            {"error": "Reservation not found"}, status=status.HTTP_404_NOT_FOUND
        )
    if request.user != reservation.user:
        return Response(
            {"error": "You do not have permission to delete this reservation"},
            status=status.HTTP_403_FORBIDDEN,
        )

    current_time = timezone.now()

    if current_time >= (reservation.created_at + timedelta(minutes=15)):
        return Response(
            {"error": "Timeover you can't cancel the reservation now!"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    reservation.delete()
    return Response(
        {"message": "Reservation deleted successfully"},
        status=status.HTTP_204_NO_CONTENT,
    )


@api_view(["GET"])
def reservation_details(request, reservation_id):
    reservation = Reservation.objects.get(id=reservation_id)
    return Response(reservation)


# users can get his reservations
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_my_reservations(request):
    reservation = Reservation.objects.filter(user=request.user)
    serialize = ReservationSerializer(reservation, many=True)

    return Response(serialize.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated, permissions.IsStudioOwnerType])
def studios_reservations(request):

    owned_studios = request.user.studios.all()
    reservations = Reservation.objects.filter(studio__in=owned_studios)
    serializer = ReservationSerializer(reservations, many=True)

    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated, IsAdminUser])
def get_all_reservations(request):
    reservations = Reservation.objects.all()
    serializer = ReservationSerializer(reservations, many=True)
    return Response(serializer.data)

