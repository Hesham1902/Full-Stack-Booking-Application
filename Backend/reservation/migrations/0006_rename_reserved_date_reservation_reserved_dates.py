# Generated by Django 5.0.4 on 2024-05-03 18:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reservation', '0005_reservation_total_price'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reservation',
            old_name='reserved_date',
            new_name='reserved_dates',
        ),
    ]
