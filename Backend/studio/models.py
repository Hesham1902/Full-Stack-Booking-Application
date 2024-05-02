from django.db import models
from authentication.models import UserManage

class Studio(models.Model):
    owner = models.ForeignKey(UserManage, on_delete=models.CASCADE, related_name='studios')
    name = models.CharField(max_length=100)
    email = models.EmailField()
    working_days = models.CharField(max_length=100)
    working_hours = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name