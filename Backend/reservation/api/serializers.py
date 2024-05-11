from rest_framework import serializers

from studio.api.serializers import StudioSerializer
from ..models import Reservation

class ReservationSerializer(serializers.ModelSerializer):
    studio = StudioSerializer()
    class Meta:
        model = Reservation
        depth = 1
        fields = ['id','studio','reserved_dates',"total_price"]
