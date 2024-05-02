from django.contrib.auth.models import AbstractUser
from django.db import models


class UserManage(AbstractUser):
    is_studio_owner = models.BooleanField('studio owner status', default=False)

    def __str__(self):
        return self.username