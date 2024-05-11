from rest_framework import serializers
from ..models import Studio

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Studio
        fields = ['id','studio','reserved_dates']
