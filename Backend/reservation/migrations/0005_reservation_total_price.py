# Generated by Django 5.0.4 on 2024-05-03 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservation', '0004_alter_reservation_reserved_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservation',
            name='total_price',
            field=models.DecimalField(decimal_places=2, default=100, max_digits=10),
            preserve_default=False,
        ),
    ]
