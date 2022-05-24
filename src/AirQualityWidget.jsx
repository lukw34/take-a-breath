import React, { useState, useEffect } from 'react';
import { fetchAirData } from './api/airQuality.api';
import "./styles/air-quality-widget.css"

const AirQualityWidget = ({ city }) => {
  const [airData, setAirData] = useState(null);
  useEffect(() => {
    fetchAirData(city).then((fetchedAirData) => {
      setAirData(fetchedAirData);
    });
  }, []);

  const refreshAirData = () => {
    fetchAirData(city).then((fetchedAirData) => {
      setAirData(fetchedAirData);
    });
  }

  return airData === null ? null : (
    <div className="air-quality-widget-container">
      <div className="air-quality-city">{city}</div>
      <div className="air-quality-info-container">
        <div className="air-quality-aqi">{airData.aqi}</div>
        <div className="air-quality-label">{airData.quality}</div>
      </div>
      <button className="air-quality-refresh-button" onClick={refreshAirData}>refresh</button>
    </div>
  );
};

export default AirQualityWidget;
