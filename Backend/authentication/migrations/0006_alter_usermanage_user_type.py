# Generated by Django 5.0.4 on 2024-05-02 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0005_alter_usermanage_is_studio_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usermanage',
            name='user_type',
            field=models.CharField(choices=[('studio_owner', 'Studio Owner'), ('user', 'User')], default='user', max_length=20),
        ),
    ]
