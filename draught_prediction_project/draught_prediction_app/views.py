from django.shortcuts import render
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import WeatherData

@api_view(['POST'])
def collect_weather_data(request):
    if request.method == 'POST':
        data = request.data
        WeatherData.objects.create(
            date=data['date'],
            temperature=data['temperature'],
            precipitation=data['precipitation'],
            humidity=data['humidity']
        )
        return Response({'message': 'Weather data collected successfully'})

@api_view(['POST'])
def predict_drought(request):
    if request.method == 'POST':
        data = request.data
        # Use machine learning model to make predictions (to be implemented)
        prediction = 0  # Dummy prediction for demonstration
        return Response({'prediction': prediction})
