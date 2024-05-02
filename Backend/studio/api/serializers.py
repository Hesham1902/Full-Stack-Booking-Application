from rest_framework import serializers
from ..models import Studio

class StudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Studio
        fields = ['name','email',"working_days", "working_hours", "address"]
