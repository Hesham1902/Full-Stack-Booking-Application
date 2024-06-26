from rest_framework import generics, status
from rest_framework.response import Response
from ..models import UserManage
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView


class RegistrationView(generics.CreateAPIView):
    queryset = UserManage.objects.all()
    serializer_class = UserSerializer


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):

        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class UserProfileView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)