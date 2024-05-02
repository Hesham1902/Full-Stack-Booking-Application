from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,AllowAny
from .permissions import IsStudioOwner
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
    permission_classes = [IsAuthenticated, IsStudioOwner]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Update One
class UpdateStudioView(generics.UpdateAPIView):
    serializer_class = StudioSerializer
    permission_classes = [IsAuthenticated, IsStudioOwner]
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
    permission_classes = [IsAuthenticated, IsStudioOwner]
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




# @api_view(['POST'])
# @permission_classes([IsAuthenticated, IsStudioOwner])
# def add_studio(request):
#     """
#     Endpoint to add a new studio.
#     Only Studio Owners are allowed to add studios.
#     """
#     if request.method == 'POST':
#         serializer = StudioSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(owner=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['PUT'])
# @permission_classes([IsAuthenticated, IsStudioOwner])
# def update_studio(request, id):
#     """
#     Endpoint to update an existing studio.
#     Only Studio Owners are allowed to update their own studios.
#     """
#     pass

# @api_view(['GET'])
# def getone_studio(request, id):
#     """
#     Endpoint to retrieve details of a specific studio.
#     """
#     pass

# @api_view(['DELETE'])
# @permission_classes([IsAuthenticated, IsStudioOwner])
# def delete_studio(request, id):
#     """
#     Endpoint to delete an existing studio.
#     Only Studio Owners are allowed to delete their own studios.
#     """
#     pass
