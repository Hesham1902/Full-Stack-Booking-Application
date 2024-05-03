from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.response import Response
from ..models import UserManage
from .serializers import UserSerializer


class RegistrationView(generics.CreateAPIView):
    queryset = UserManage.objects.all()
    serializer_class = UserSerializer
