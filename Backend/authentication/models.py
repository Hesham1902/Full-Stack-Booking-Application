# from django.contrib.auth.models import AbstractUser
# from django.db import models


# class UserManage(AbstractUser):
#     is_studio_owner = models.BooleanField('studio owner status', default=False)

#     def __str__(self):
#         return self.username

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from rest_framework_simplejwt.tokens import RefreshToken

class UserManager(BaseUserManager):
    def create_user(self, username, email=None, password=None, user_type='user'):
        if not username:
            raise ValueError('The Username must be set')
        user = self.model(username=username, email=email, user_type=user_type)
        if not password:
            raise ValueError('The password must be set')
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None):
        user = self.create_user(username, email, password, user_type='admin')
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class UserManage(AbstractBaseUser, PermissionsMixin):
    USER_TYPE_CHOICES = (
        ('studio_owner', 'Studio Owner'),
        ('user', 'User')
    )

    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default='user')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_studio_owner = models.BooleanField('studio owner status',default=False)

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    def __str__(self):
        return self.username

    @property
    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
