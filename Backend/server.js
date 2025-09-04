require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Route: /api/weather?city=CityName
app.get('/api/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City query param required' });

  try {
    // Geocoding API
    const geoRes = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
      params: { name: city, count: 1, language: 'en', format: 'json' }
    });

    if (!geoRes.data?.results?.length) {
      return res.status(404).json({ error: 'City not found' });
    }

    const place = geoRes.data.results[0];
    const latitude = place.latitude;
    const longitude = place.longitude;
    const resolvedName = `${place.name}${place.country ? ', ' + place.country : ''}`;

    // Current Weather API
    const weatherRes = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: { latitude, longitude, current_weather: true, timezone: 'auto' }
    });

    const current = weatherRes.data.current_weather;

    res.json({
      city: resolvedName,
      latitude,
      longitude,
      temperature: current?.temperature ?? null,
      weathercode: current?.weathercode ?? null,
      windspeed: current?.windspeed ?? null
    });
  } catch (err) {
    console.error('API error:', err.message);
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

// Root route
app.get('/', (req, res) => res.send({ message: 'Weather Now API running' }));

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
