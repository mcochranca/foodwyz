import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WorldMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Placeholder markers, you can replace with actual data
    L.marker([51.505, -0.09]).addTo(map).bindPopup('Public Post Example 1');
    L.marker([48.8566, 2.3522]).addTo(map).bindPopup('Public Post Example 2');
  }, []);

  return (
    <div id="map" style={{ height: '400px', width: '100%' }}></div>
  );
};

export default WorldMap;
