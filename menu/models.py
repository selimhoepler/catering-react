from django.db import models

class CateringBooking(models.Model):
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    customer_name = models.CharField(max_length=100)
    # Add other fields as needed

    def __str__(self):
        return self.customer_name
