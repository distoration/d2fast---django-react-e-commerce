from django.urls import path
from base.views.stripe_views import CreateStripeCheckoutSession


urlpatterns = [
    path('create-checkout-session/order/<pk>', CreateStripeCheckoutSession.as_view()),
]