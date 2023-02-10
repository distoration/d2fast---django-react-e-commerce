from operator import xor
from re import X
import re
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import redirect
from backend.settings import STRIPE_PUBLIC_KEY, STRIPE_SECRET_KEY, SITE_URL
from django.shortcuts import get_object_or_404

from rest_framework.status import (
    HTTP_200_OK,
    HTTP_404_NOT_FOUND,
    HTTP_400_BAD_REQUEST,
)



import stripe
from base.models import Order

stripe.api_key = "sk_test_51LZzeiJiH1BQd9txc5MPHCIeaagPtbb7BFaamFLztaloWKjdI3auf0iGygLaMNU0ZITy3XmP1D6O92I5mwIRRsx300JX4I78mO"

class CreateStripeCheckoutSession(APIView):
    def get(self, request, *args, **kwargs):
        order_id = self.kwargs["pk"]
        try:
            #order = Order.objects.get(_id = order_id)
            order = Order.objects.get(_id=order_id)
        except:
            return Response({"Message": "Incorrect order"}, status=HTTP_400_BAD_REQUEST)
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        "price_data": {
                            "currency": "pln",
                            "unit_amount": int(order.totalPrice * 100),
                            "product_data": {"name": "chuj"},
                        },
                        "quantity": 1,
                    }
                ],
                mode="payment",
                payment_method_types=["card", "p24", "blik"],
                success_url=SITE_URL + "?success=true",
                cancel_url=SITE_URL + "?canceled=true",
            )
            return redirect(checkout_session.url, code=303)
        except Exception as e:
            return Response(
                {
                    "msg": "something went wrong while creating stripe session",
                    "error": str(e),
                },
                status=500,
            )






""""

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):
    user = request.user
    try:
        order = Order.objects.get(_id=pk)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)    
        else:
            Response({'detail': 'Not authorized to view this order'}, 
                    status=status.HTTP_400_BAD_REQUEST)
            
    except:
        return Response({'detail': 'Order does not exists'}, status=status.HTTP_400_BAD_REQUEST)"""