import traceback
from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status

def custom_exception_handler(exc, context):
    # Call the default exception handler first
    response = exception_handler(exc, context)
    
    if response is None:
        traceback.print_exc()

        # Return a generic internal server error response
        return Response(
            {"detail": "An unexpected error occurred. Please try again later."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

    return response
