# Generated by Django 4.0.6 on 2022-08-22 11:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0009_order_battletag'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='battleTag',
        ),
        migrations.RemoveField(
            model_name='shippingaddress',
            name='address',
        ),
        migrations.RemoveField(
            model_name='shippingaddress',
            name='city',
        ),
        migrations.RemoveField(
            model_name='shippingaddress',
            name='country',
        ),
        migrations.RemoveField(
            model_name='shippingaddress',
            name='postalCode',
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='deliveredAt',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='isDelivered',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='isPaid',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='paidAt',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='paymentMethod',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='taxPrice',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='totalPrice',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]