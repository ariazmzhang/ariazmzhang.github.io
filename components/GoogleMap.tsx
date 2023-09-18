// components/GoogleMap.tsx
import React, { useEffect } from 'react';
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const GoogleMap: React.FC = () => {
  useEffect(() => {
    const initializeMap = () => {
      if (typeof google === 'undefined') {
        return;
      }
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };
    
    if (typeof google === 'undefined') {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.addEventListener('load', initializeMap);
    } else {
      initializeMap();
    }

  }, []);

  return <div id="map" style={{ height: '100%', width: '100%' }} />;
};

export default GoogleMap;
