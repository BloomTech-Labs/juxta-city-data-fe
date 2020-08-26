import React, { useState, useEffect } from 'react';
import MaterialUiGridList from './MaterialUIGridList';
import { getBestCities } from '../../functions/index';
import { Heading } from './styles/BestCitiesStyles';
import { Card } from 'semantic-ui-react';

const BestCities = () => {
  const [gridList, setGridList] = useState([]);
 
  useEffect(() => {
    getBestCities().then(cities => setGridList(cities));
  }, []);

  return (
    <Card  fluid style={{ textAlign: 'center' }} >
      <Heading>Best Cities</Heading>
      <MaterialUiGridList gridList={gridList} />
    </Card>
  );
};

export default BestCities;
