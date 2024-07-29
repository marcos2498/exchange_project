#defines my data table on postgresql 

from django.db import models


class Commodity(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    unit = models.CharField(max_length=60)

    def __str__(self):
        return self.name
