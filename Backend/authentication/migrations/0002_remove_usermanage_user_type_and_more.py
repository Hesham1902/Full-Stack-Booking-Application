# Generated by Django 5.0.4 on 2024-05-02 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usermanage',
            name='user_type',
        ),
        migrations.AddField(
            model_name='usermanage',
            name='is_studio_owner',
            field=models.BooleanField(default=False, verbose_name='studio owner status'),
        ),
    ]
