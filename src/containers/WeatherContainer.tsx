import React from 'react';
import useWeather from '../state/useWeather';

export default function WeatherContainer(){
  const { currentWeather } = useWeather();
  return <h1> WeatherContainer </h1>;
}

