import React from 'react';
import { getLabel, getIcon } from './whetherCodeMap'

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-2">{weather.city}</h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-6xl font-extrabold">{weather.temperature}°C</p>
          <p className="text-sm text-slate-500">{getLabel(weather.weathercode)}</p>
          <p className="text-sm text-slate-500">Wind: {weather.windspeed} m/s</p>
        </div>
        <div className="text-6xl">{getIcon(weather.weathercode)}</div>
      </div>
    </div>
  );
}

