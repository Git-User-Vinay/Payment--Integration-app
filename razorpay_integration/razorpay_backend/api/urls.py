from django.urls import path
from .api_razorpay import   CreateOrderAPIView, TransactionAPIVew


urlpatterns =[
    path("order/create/", CreateOrderAPIView.as_view(), name="create-order-api"),
    path("order/complete/", TransactionAPIVew.as_view(), name="complete-order-api"),
    
]

