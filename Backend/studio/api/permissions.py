from rest_framework.permissions import BasePermission,SAFE_METHODS

class IsStudioOwnerType(BasePermission):
    """
    Custom permission to only allow Studio Owners to create new studios.
    """
    def has_permission(self, request, view):
        # Check if the user making the request is a Studio Owner
        return request.user and request.user.is_authenticated and request.user.is_studio_owner or request.user.is_staff
    
    def has_object_permission(self, request, view, obj):
        # Check if the user is the owner of the studio or an admin
        return request.user.is_staff or (obj.owner == request.user)
    
