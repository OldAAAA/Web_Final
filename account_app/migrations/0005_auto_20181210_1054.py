# Generated by Django 2.1.2 on 2018-12-10 10:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account_app', '0004_auto_20181207_1645'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='last_check',
            field=models.DateTimeField(default=datetime.datetime(2018, 12, 10, 10, 54, 1, 161880), verbose_name='last check Time'),
        ),
    ]
