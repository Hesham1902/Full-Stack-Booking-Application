from rest_framework import serializers

from studio.models import Studio
from ..models import Reservation

class StudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Studio
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    studio = StudioSerializer()  # Nested serializer for Studio model

    class Meta:
        model = Reservation
        exclude = ("user","created_at")
    def create(self, validated_data):
        # Extract studio data from validated data
        studio_data = validated_data.pop('studio')
        
        # Create reservation without saving
        reservation = Reservation.objects.create(**validated_data)
        
        # Create associated studio instance
        Studio.objects.create(reservation=reservation, **studio_data)
        
        return reservation