from django.urls import path
from . import views

urlpatterns = [
    path('api/register/', views.RegistrationView.as_view(), name='register'),
    path('api/logout/', views.LogoutView.as_view(), name='logout'),
]