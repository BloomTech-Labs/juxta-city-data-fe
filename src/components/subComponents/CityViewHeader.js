import React from 'react';
import { Header } from 'semantic-ui-react';
import FavoriteIcon from './FavoriteIcon';

export default function CityViewHeader(props) {
  return (
    <div className='header-city'>
      <FavoriteIcon cityData={props.cityData} {...props} />
      <Header as='h1'>{props.cityData.city}</Header>
    </div>
  );
}
