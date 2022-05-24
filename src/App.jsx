import React from 'react';
import AirQuality from './AirQualtiy';
import Divider from './Divider';
import Image from './Image';
import AirQualtiyWidget from './AirQualityWidget'
import './styles/app.css';
import Title from './Title';

export default function App() {
  return (
    <div class="main-container">
      <Image />
      <Divider />
      <Title title="Take a breath"/>
      <Divider />
      <AirQualtiyWidget city="Cracow" />
      <AirQualtiyWidget city="London" />
      <AirQualtiyWidget city="Beijing" />
    </div>
  );
}
