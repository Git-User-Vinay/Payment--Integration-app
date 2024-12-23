from django.db import models

# Create your models here.

class Transcation(models.Model):
    payment_id = models.CharField(max_length=100)
    order_id = models.CharField(max_length=100)
    signature = models.CharField(max_length=200)
    amount = models.IntegerField()
    datetime = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return str(self.id)