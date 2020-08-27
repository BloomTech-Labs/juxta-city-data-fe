import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CityContext from '../../contexts/CityContext';
import { getCityData, randomCity } from '../../functions';
import BestCityCard from './BestCityCard';
import { CityImageContainer } from './styles/BestCitiesStyles';

const MaterialUiGridList = (props) => {
  const { setCityData } = useContext(CityContext);
  const history = useHistory();
  
 const randomCities = randomCity(props.gridList).splice(0, 6);

  function handleClick(city) {
    getCityData(city).then((city) => {
      setCityData(city);
      localStorage.setItem('cityName', city.city);
      history.push('/cityview');
    });
  }

  return (
    <CityImageContainer data-testid='grid-tile'>
      {randomCities.map((tile) => (
        <BestCityCard key={tile.city} cities={tile} handleClick={handleClick} />
      ))}
    </CityImageContainer>
  );
};

export default MaterialUiGridList;
