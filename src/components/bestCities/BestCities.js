import React, { useState, useEffect } from 'react';
import MaterialUiGridList from './MaterialUIGridList';
import { getBestCities } from '../../functions/index';
import { Heading } from './styles/BestCitiesStyles';
import { Container } from 'semantic-ui-react'

const BestCities = () => {
  const [gridList, setGridList] = useState([]);

  useEffect(() => {
    getBestCities().then((cities) => setGridList(cities));
  }, []);

  return (
    <Container fluid
      style={{ textAlign: 'center',   margin: '30px', background:'transparent' }}
      >
      <Heading>Best Cities</Heading>
      <MaterialUiGridList gridList={gridList} />
    </Container>
  );
};

export default BestCities;
