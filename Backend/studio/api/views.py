from rest_framework import generics
from rest_framework.permissions import IsAuthenticated,AllowAny
from .permissions import IsStudioOwnerType
from .serializers import StudioSerializer
from ..models import Studio

class AllStudiosListView(generics.ListAPIView):
    """
    Retrieve all existing studios.
    """
    queryset = Studio.objects.all()
    serializer_class = StudioSerializer
    permission_classes = [AllowAny]  # Allow access to all users, even unauthenticated

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
    queryset = Studio.objects.all()


    def get_serializer(self, *args, **kwargs):
        kwargs['partial'] = True
        return super(UpdateStudioView, self).get_serializer(*args, **kwargs)
    
# Get One
class GetOneStudioView(generics.RetrieveAPIView):
    serializer_class = StudioSerializer
    queryset = Studio.objects.all()

#Delete
class DeleteStudioView(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated, IsStudioOwnerType]
    queryset = Studio.objects.all()

#Get My studios
class UserStudiosListView(generics.ListAPIView):
    """
    Retrieve all studios belonging to the logged-in user.
    """
    serializer_class = StudioSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Studio.objects.filter(owner=user)


