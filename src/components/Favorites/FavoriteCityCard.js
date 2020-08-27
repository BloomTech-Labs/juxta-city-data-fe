import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FavoriteIcon from '../subComponents/FavoriteIcon';
import { getCityData } from '../../functions';
import CityContext from '../../contexts/CityContext';
import { Card } from 'semantic-ui-react';

export default function FavoiriteCityCard(props) {
  const history = useHistory();

  const { setCityData } = useContext(CityContext);

  const handleClick = e => {
    getCityData(props.cityData.city).then(res => {
      setCityData(res);
      localStorage.setItem('cityName', props.cityData.city);
      history.push('/cityview');
    });
  };
  return (
    <Card>
      <Card.Content style={{display: 'flex',flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'baseline', }} >
        <FavoriteIcon {...props} cityData={props.cityData} />
        <Card.Header as='h4' onClick={handleClick}>
          {props.cityData.city}
        </Card.Header>
      </Card.Content>
    </Card>
  );
}
