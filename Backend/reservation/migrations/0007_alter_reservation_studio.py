# Generated by Django 5.0.4 on 2024-05-03 21:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservation', '0006_rename_reserved_date_reservation_reserved_dates'),
        ('studio', '0002_studio_reservations'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='studio',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='all_reservations', to='studio.studio'),
        ),
    ]
