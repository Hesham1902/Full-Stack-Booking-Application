from django.db import models
from authentication.models import UserManage
from studio.models import Studio
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

class Reservation(models.Model):
    user = models.ForeignKey(UserManage, on_delete=models.CASCADE)
    studio = models.ForeignKey(Studio,related_name="all_reservations" ,on_delete=models.CASCADE)
    reserved_dates = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Reservation for {self.studio.name} by {self.user.username} on this days: {self.reserved_dates}"


@receiver(post_save, sender=Reservation)
def update_studio_reservations(sender, instance, **kwargs):
    # Get the associated studio
    studio = instance.studio

    # Get the current reservations for the studio
    reservations = studio.reservations if studio.reservations else []
    # print(reservations)
    # Add the new reservation date to the list
    for rs in instance.reserved_dates:
        # print(rs)
        reservations.append(rs)

    # Update the studio's reservations property
    studio.reservations = reservations
    studio.save()


@receiver(post_delete, sender=Reservation)
def update_studio_reservations(sender, instance, **kwargs):
    # Get the associated studio
    studio = instance.studio

    # Get the current reservations for the studio
    reservations = studio.reservations if studio.reservations else []
    # print(reservations)
    # Add the new reservation date to the list
    for rs in instance.reserved_dates:
        # print(rs)
        reservations.remove(rs)

    # Update the studio's reservations property
    studio.reservations = reservations
    studio.save()