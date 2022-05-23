import React, { useState, useEffect } from 'react';
import { fetchAirData } from './api/airQuality.api';

const AirQuality = ({ city }) => {
  const [airData, setAirData] = useState(null);
  useEffect(() => {
    fetchAirData(city).then((fetchedAirData) => {
      setAirData(fetchedAirData);
    });
  }, []);

  return airData === null ? null : (
    <div>
      <div>{airData.aqi}</div>
      <div>{airData.quality}</div>
    </div>
  );
};

export default AirQuality;
