import React, { useState } from 'react';
import axios from 'axios';

const WeatherForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    temperature: '',
    precipitation: '',
    humidity: ''
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/collect-weather-data/', formData);
      alert('Weather data collected successfully');

      // Make prediction request after collecting weather data
      const response = await axios.post('/api/predict-drought/', formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error collecting weather data:', error);
    }
  };

  return (
    <div>
      <h2>Enter Weather Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Temperature:</label>
          <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} required />
        </div>
        <div>
          <label>Precipitation:</label>
          <input type="number" name="precipitation" value={formData.precipitation} onChange={handleChange} required />
        </div>
        <div>
          <label>Humidity:</label>
          <input type="number" name="humidity" value={formData.humidity} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {prediction !== null && (
        <p>Drought Prediction: {prediction}</p>
      )}
    </div>
  );
};

export default WeatherForm;
