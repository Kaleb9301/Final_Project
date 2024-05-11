from django.urls import path
from .views import collect_weather_data, predict_drought

urlpatterns = [
    path('collect-weather-data/', collect_weather_data, name='collect-weather-data'),
    path('predict-drought/', predict_drought, name='predict-drought'),
]
