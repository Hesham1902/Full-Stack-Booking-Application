import json
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes

from studio.models import Studio
from ..models import Reservation
from .serializers import ReservationSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_reservation(request):
    serializer = ReservationSerializer(data=request.data)
    if serializer.is_valid():
        studio_id = request.data.get('studio')  
        reserved_date = request.data.get('reserved_date')  
        
        try:
            studio = Studio.objects.get(id=studio_id)
        except Studio.DoesNotExist:
            return Response({"detail": "Studio not found."}, status=status.HTTP_404_NOT_FOUND)
        
        studio_reservations = set(studio.reservations)
        common_dates = set(reserved_date).intersection(studio_reservations)

        if common_dates:
            return Response({"detail": "This date is already reserved for the studio."},
                            status=status.HTTP_400_BAD_REQUEST)

        #TODO1: Check if reserved_date converted to days and compared to the studio working_days

        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_reservation(request, reservation_id):
    try:
        reservation = Reservation.objects.get(id=reservation_id)
    except Reservation.DoesNotExist:
        return Response({"error": "Reservation not found"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.user != reservation.user:
        return Response({"error": "You do not have permission to delete this reservation"}, status=status.HTTP_403_FORBIDDEN)
    
    #TODO2: Check if time.now() > reservation.created_at + 15 mins if true ==> raise error you can't cancel the reservation now    
    
    reservation.delete()
    return Response({"message": "Reservation deleted successfully"}, status=status.HTTP_204_NO_CONTENT)



#TODO3: ENDPOINT for get one reservation by id
#TODO4: ENDPOINT for get All reservations
#TODO5: ENDPOINT for updating a reservation by id
