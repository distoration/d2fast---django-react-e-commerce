# Generated by Django 4.1.1 on 2022-10-18 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_order_battletag'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='lastname',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='lastname',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]