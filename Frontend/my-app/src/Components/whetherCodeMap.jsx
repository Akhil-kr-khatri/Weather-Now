const codes = {
  0: { text: 'Clear sky', icon: '☀️' },
  1: { text: 'Mainly clear', icon: '🌤️' },
  2: { text: 'Partly cloudy', icon: '⛅' },
  3: { text: 'Overcast', icon: '☁️' },
  61: { text: 'Rain', icon: '🌧️' },
  63: { text: 'Moderate rain', icon: '🌧️' },
  65: { text: 'Heavy rain', icon: '⛈️' },
  71: { text: 'Snow', icon: '❄️' },
  95: { text: 'Thunderstorm', icon: '⚡' }
};

export function getLabel(code) {
  return codes[code]?.text || 'Unknown';
}
export function getIcon(code) {
  return codes[code]?.icon || '🌤️';
}
