from django.urls import path
from . import views

urlpatterns = [
    path('api/register/', views.RegistrationView.as_view(), name='register'),
]