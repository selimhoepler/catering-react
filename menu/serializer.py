from rest_framework import serializers
from .models import CateringBooking

class CateringSerializer(serializers.ModelSerializer):
    class Meta:
        model = CateringBooking
        fields = ('id','date', 'start_time', 'end_time', 'customer_name')