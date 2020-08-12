import React from 'react';
import { CityCard } from './styles/BestCitiesStyles';
import '../../App.css';

const BestCityCard = (props) => {
  const livability = Math.round(props.cities.LivabilityScore);
  return (
    <CityCard
      data-testid='city-card'
      onClick={() => props.handleClick(props.cities.city)}>
      <img src={props.cities.photo_url} alt='' />
      <h3>{props.cities.city}</h3>
      <p>Livability Score: {livability}</p>
    </CityCard>
  );
};

export default BestCityCard;
