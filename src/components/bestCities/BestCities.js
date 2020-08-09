import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import MaterialUiGridList from './MaterialUIGridList';
import { getBestCities } from '../../functions/index';
import { Heading } from './styles/BestCitiesStyles';

const BestCities = () => {
  const [gridList, setGridList] = useState([]);

  useEffect(() => {
    getBestCities().then((cities) => setGridList(cities));
  }, []);

  return (
    <Container
      maxWidth='xl'
      style={{
        backgroundColor: '#fff',
        textAlign: 'center'
      }}>
      '<Heading>Best Cities</Heading>
      <MaterialUiGridList gridList={gridList} />
    </Container>
  );
};

export default BestCities;
