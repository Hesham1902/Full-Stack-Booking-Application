from rest_framework import serializers
from ..models import Studio

class StudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Studio
        fields = ['name', 'image', 'working_days', 'start_time', 'end_time', 'price_per_day', 'address', 'rate', 'status']
