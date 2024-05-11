from django.db import models

# Create your models here.
class WeatherData(models.Model):
    date = models.DateField()
    temperature = models.FloatField()
    precipitation = models.FloatField()
    humidity = models.FloatField()

    def __str__(self):
        return str(self.date)
