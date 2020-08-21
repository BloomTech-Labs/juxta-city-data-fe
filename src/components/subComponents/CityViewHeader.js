import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import FavoriteIcon from './FavoriteIcon';

export default function CityViewHeader(props) {
  return (
    <div className='header-city' >
      <FavoriteIcon cityData={props.cityData} {...props} />
      <Header as='h1'>{props.cityData.city}</Header>
      <Icon name='map marker alternate' size='large' color='blue' />
    </div>
  );
}
