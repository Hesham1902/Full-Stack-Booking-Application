from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_reservation, name='create_reservation'),
    path('delete/<int:reservation_id>/', views.delete_reservation, name='delete_reservation'),
]