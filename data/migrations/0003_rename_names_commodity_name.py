# Generated by Django 5.0.7 on 2024-07-24 23:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0002_remove_commodity_time'),
    ]

    operations = [
        migrations.RenameField(
            model_name='commodity',
            old_name='names',
            new_name='name',
        ),
    ]
