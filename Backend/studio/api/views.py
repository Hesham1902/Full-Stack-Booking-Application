from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from django_filters import rest_framework as filters

from studio.filters import StudioFilter

from .permissions import IsStudioOwnerType
from .serializers import StudioSerializer
from ..models import Studio


class AllStudiosListView(generics.ListAPIView):
    queryset = Studio.objects.all()
    permission_classes = [AllowAny]
    serializer_class = StudioSerializer
    filterset_class = StudioFilter
    filter_backends = (filters.DjangoFilterBackend,)
 

# Add Studio
class AddStudioView(generics.CreateAPIView):
    serializer_class = StudioSerializer
    permission_classes = [IsAuthenticated, IsStudioOwnerType]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Update One
class UpdateStudioView(generics.UpdateAPIView):
    serializer_class = StudioSerializer
    permission_classes = [IsAuthenticated, IsStudioOwnerType]
    # queryset = Studio.objects.all()

    def get_queryset(self):
        user = self.request.user
        return Studio.objects.filter(owner=user)

    def get_serializer(self, *args, **kwargs):
        kwargs["partial"] = True
        return super(UpdateStudioView, self).get_serializer(*args, **kwargs)


# Get One
class GetOneStudioView(generics.RetrieveAPIView):
    serializer_class = StudioSerializer
    queryset = Studio.objects.all()


# Delete
class DeleteStudioView(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated, IsStudioOwnerType]
    queryset = Studio.objects.all()


# Get My studios [Only for studio owners type]
class UserStudiosListView(generics.ListAPIView):
    """
    Retrieve all studios belonging to the logged-in user.
    """

    serializer_class = StudioSerializer
    permission_classes = [IsAuthenticated, IsStudioOwnerType]

    def get_queryset(self):
        user = self.request.user
        return Studio.objects.filter(owner=user)
