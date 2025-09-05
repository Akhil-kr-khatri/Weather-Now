import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './Components/wetherCard';


const API_BASE = 'https://weather-now-n9uj.onrender.com';
// const API_BASE = 'http://localhost:5000';


export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError('Enter a city name');
      return;
    }
    setError('');
    setLoading(true);
    setWeather(null);

    try {
      const res = await axios.get(`${API_BASE}/api/weather`, { params: { city } });
      setWeather(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch weather');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl font-extrabold text-sky-600">Weather Now</h1>
      <p className="mt-2 text-slate-500">Check current weather conditions quickly 🌤️</p>

      <form onSubmit={handleSearch} className="mt-6 flex gap-2">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow w-64"
        />
        <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded-lg shadow">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-slate-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <WeatherCard weather={weather} />
    </div>
  );
}
