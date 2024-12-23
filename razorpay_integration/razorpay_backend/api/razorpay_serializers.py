from rest_framework import serializers
from razorpay_backend.models import Transcation

class CreateOrderSerializer(serializers.Serializer):
    amount = serializers.IntegerField()
    currency = serializers.CharField()


class TransactionModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Transcation
        fields = ["payment_id", "order_id", "signature", "amount"]