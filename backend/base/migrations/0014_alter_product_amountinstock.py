# Generated by Django 4.1.1 on 2022-11-04 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_orderitem_lastname_product_lastname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='amountInStock',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
