import React from 'react';
import { CityCard } from './styles/BestCitiesStyles';
import '../../App.css';

const BestCityCard = ({ cities, handleClick }) => {
  const { city, photo_url } = cities;
  return (
    <CityCard onClick={() => handleClick(city)}>
      <img src={photo_url} alt='' />
      <h3>{city}</h3>
    </CityCard>
  );
};

export default BestCityCard;
