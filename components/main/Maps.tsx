"use client";
import { useEffect, useRef } from 'react';

// IIT Mandi coordinates
const IIT_MANDI_LAT = 31.7754;
const IIT_MANDI_LNG = 76.9861;

export default function LeafletMapIITMandi() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Load Leaflet CSS
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const leafletCSS = document.createElement('link');
      leafletCSS.rel = 'stylesheet';
      leafletCSS.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
      document.head.appendChild(leafletCSS);
    }

    // Load Leaflet JS
    const loadLeafletJS = () => {
      return new Promise((resolve) => {
        if (window.L) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js';
        script.onload = () => resolve(true);
        document.body.appendChild(script);
      });
    };

    const initializeMap = async () => {
      await loadLeafletJS();
      
      if (window.L && mapRef.current) {
        // Destroy previous map instance if it exists
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }
        
        // Create new map instance
        mapInstanceRef.current = window.L.map(mapRef.current).setView([IIT_MANDI_LAT, IIT_MANDI_LNG], 15);
        
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(mapInstanceRef.current);
        
        window.L.marker([IIT_MANDI_LAT, IIT_MANDI_LNG])
          .addTo(mapInstanceRef.current)
          .bindPopup('<b>IIT Mandi</b><br>Kamand Campus')
          .openPopup();
      }
    };

    initializeMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">IIT Mandi Location</h2>
      <div
        ref={mapRef}
        className="w-full max-w-3xl h-96 rounded-xl border-2 border-blue-500 shadow-lg overflow-hidden"
      >
        {/* Leaflet map will render here */}
      </div>
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-gray-700">Indian Institute of Technology Mandi</p>
        <p className="text-gray-600">Kamand Campus, Himachal Pradesh 175005</p>
        <p className="text-gray-500 mt-2">Coordinates: {IIT_MANDI_LAT}, {IIT_MANDI_LNG}</p>
      </div>
    </div>
  );
}