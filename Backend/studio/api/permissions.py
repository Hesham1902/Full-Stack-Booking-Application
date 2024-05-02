from rest_framework import permissions
from ..models import Studio

class IsStudioOwner(permissions.BasePermission):
    """
    Custom permission to only allow Studio Owners to create new studios.
    """
    def has_permission(self, request, view):
        # Check if the user making the request is a Studio Owner
        return request.user and request.user.is_authenticated and request.user.is_studio_owner


    def is_owner(self,request,view):
        studio = Studio.objects.get(pk=request.user.id)
        return request.user and studio and request.user.is_authenticated