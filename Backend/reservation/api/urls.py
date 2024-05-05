from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_reservation, name='create_reservation'),
    path('my/', views.get_my_reservations, name='my-reservations'),
    path('delete/<int:reservation_id>/', views.cancel_reservation, name='cancel_reservation'),
    path('admin/delete/<int:reservation_id>/', views.admin_cancel_reservation, name='admin_cancel_reservation'),
    path('studios/reservations/', views.studios_reservations, name='my_studios_reservations'),
    #Admin only
    path('all/reservations/', views.get_all_reservations, name='get_all_reservations'),
]