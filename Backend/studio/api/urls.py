from django.urls import  path
from . import views


urlpatterns = [
    path('api/v1/<int:pk>/', views.GetOneStudioView.as_view(), name='getone_studio'),
    path('api/v1/all/', views.AllStudiosListView.as_view(), name='all_studios_list'),
    path('api/v1/user/', views.UserStudiosListView.as_view(), name='user_studios_list'),
    path('api/v1/add/', views.AddStudioView.as_view(), name='add_studio'),
    path('api/v1/update/<int:pk>/', views.UpdateStudioView.as_view(), name='update_studio'),
    path('api/v1/delete/<int:pk>/', views.DeleteStudioView.as_view(), name='delete_studio'),
]

# urlpatterns = [
#     # path('admin/', admin.site.urls),
#     path('api/v1/getAll', views.add_studio, name='add_studio'),
#     path('api/v1/add', views.add_studio, name='add_studio'),
#     path('api/v1/update/<int:id>', views.update_studio, name='update_studio'),
#     path('api/v1/getone/<int:id>', views.getone_studio, name='getone_studio'),
#     path('api/v1/delete/<int:id>', views.delete_studio, name='delete_studio'),
# ]


