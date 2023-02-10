from django.contrib import admin
from .models import *
from import_export import resources
from import_export.admin import ImportExportModelAdmin

class ProductsResource(resources.ModelResource):
    class Meta:
        model = Product
        fields = ('_id', 'name','lastname', 'image', 'category', 'description','price','amountInStock', 'createdAt', 'user')



class ProductsAdmin(ImportExportModelAdmin):
    list_display = ['user','name', 'price']
    resource_classes = [ProductsResource]

# Register your models here.
admin.site.register(Product,ProductsAdmin)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)

