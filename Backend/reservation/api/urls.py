from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_reservation, name='create_reservation'),
    path('delete/<int:reservation_id>/', views.delete_reservation, name='delete_reservation'),
    path('studios/reservations/', views.studios_reservations, name='my_studios_reservations'),
    #Admin only
    path('all/reservations/', views.get_all_reservations, name='get_all_reservations'),
]