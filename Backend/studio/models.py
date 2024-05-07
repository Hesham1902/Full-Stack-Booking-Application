from django.db import models
from django.forms import JSONField
from authentication.models import UserManage

class Studio(models.Model):
    owner = models.ForeignKey(UserManage, on_delete=models.CASCADE, related_name='studios')
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='studio_images/', null=True, blank=True)
    working_days = models.CharField(max_length=100, help_text="Enter working days separated by comma (e.g., 'Monday,Tuesday')")
    start_time = models.TimeField()  # Opening time of the studio
    end_time = models.TimeField()  # Closing time of the studio
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)  # Price per day for the studio
    address = models.CharField(max_length=255)
    rate = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True, default=0)  # Average rating of the studio
    status = models.BooleanField(default=False)  # Status indicating if the studio is currently available
    reservations = models.JSONField(default=list)  # Store as list of dates

    def __str__(self):
        return self.name

    def is_available(self, day):
        """Check if the studio is available on a given day."""
        return self.working_days.split(',').__contains__(day.strftime('%A'))