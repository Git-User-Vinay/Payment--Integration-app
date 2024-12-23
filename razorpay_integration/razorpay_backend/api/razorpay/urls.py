from django.urls import path
from api_razorpay import CreateOrderAPIView


urlpatterns =[
    path("order/create/", CreateOrderAPIView.as_view(), name="create-order-api")
]

