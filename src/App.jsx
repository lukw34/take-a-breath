import React from 'react';
import AirQualityContainer from './AirQualityContainer';
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
      <AirQualityContainer>
        <AirQualtiyWidget city="Cracow" />
        <AirQualtiyWidget city="London" />
        <AirQualtiyWidget city="Beijing" />
      </AirQualityContainer>
    </div>
  );
}
