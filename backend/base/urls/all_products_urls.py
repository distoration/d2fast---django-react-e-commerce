from django.urls import path
from base.views import product_views as views

urlpatterns = [

    path('', views.getProductsNoPages, name="all-products"),
    path('d2r-ladder-items/amulets-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/armors-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/belts-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/boots-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/charms-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/full-gears-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/gloves-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/helms-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/rings-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/set-items-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/shields-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/socketable-bases-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/weapons-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/jewels-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/keys-organs-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/runewords-ladder/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/full-mercenary-gear/', views.getProductsNoPages, name="products-no-pages"),


    path('d2r-ladder-items/runewords-ladder/runewords-weapons/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/runewords-ladder/runewords-shields/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/runewords-ladder/runewords-helms/', views.getProductsNoPages, name="products-no-pages"),
    path('d2r-ladder-items/runewords-ladder/runewords-armors/', views.getProductsNoPages, name="products-no-pages"),


    #path('create/', views.createProduct, name="product-create"),
    #path('upload/', views.uploadImage, name="image-upload"),
    
    #path<'<str:pk>/reviews/', views.createProductReview, name="create-review"),
    #path('top/', views.getTopProducts, name='top-products'),
    #path('<str:pk>/', views.getProduct, name="product"),
    #path('update/<str:pk>/', views.updateProduct, name="product-update"),
    #path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),




]
