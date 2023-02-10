"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

from base.views.user_views import activate




urlpatterns = [
    path('admin/', admin.site.urls),

    path('', TemplateView.as_view(template_name='index.html')),
    #path('accounts/', include('allauth.urls')),

    path('api/stripe/', include('base.urls.stripe_urls')),



    path('api/products/', include('base.urls.product_urls')),
    path('api/all-products/', include('base.urls.all_products_urls')),


    path('api/users/', include('base.urls.user_urls')),
    path('api/orders/', include('base.urls.order_urls')),
    path('api/stripe/', include('base.urls.stripe_urls')),

    path('activate/<uidb64>/<token>', activate, name='activate')



]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
