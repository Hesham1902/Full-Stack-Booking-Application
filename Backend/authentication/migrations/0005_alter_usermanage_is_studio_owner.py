# Generated by Django 5.0.4 on 2024-05-02 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0004_usermanage_is_studio_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usermanage',
            name='is_studio_owner',
            field=models.BooleanField(default=False, verbose_name='studio owner status'),
        ),
    ]
