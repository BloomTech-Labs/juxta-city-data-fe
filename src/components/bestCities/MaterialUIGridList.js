import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CityContext from '../../contexts/CityContext';
import { getCityData } from '../../functions';
import BestCityCard from './BestCityCard';
import { CityImageContainer } from './styles/BestCitiesStyles';

const MaterialUiGridList = (props) => {
  const { setCityData } = useContext(CityContext);
  const history = useHistory();

  function randomCity(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const randomCities = randomCity(props.gridList).splice(0, 8);

  console.log('test', props.gridList);

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
