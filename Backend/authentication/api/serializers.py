from rest_framework import serializers
from ..models import UserManage

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserManage
        fields = ['id', 'username', 'email', 'user_type', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user_type = validated_data.get('user_type', 'user')
        is_studio_owner = user_type == 'studio_owner'
        
        user = UserManage.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', None),
            password=validated_data['password'],
            user_type=user_type,
        )
        
        user.is_studio_owner = is_studio_owner
        user.save()
    
        return user