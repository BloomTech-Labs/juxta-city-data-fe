import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import MaterialUiGridList from './MaterialUIGridList';
import { getBestCities } from '../../functions/index';
import { useStyles, Heading } from './styles/BestCitiesStyles';

const BestCities = () => {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width: 600px)');
  const [gridList, setGridList] = useState([]);

  useEffect(() => {
    getBestCities().then((cities) => setGridList(cities));
  }, []);

  return (
    <Container className={classes.root}>
      <Heading>Best Cities</Heading>
      <MaterialUiGridList
        mobile={mobile}
        gridList={gridList}
        titleBar={classes.titleBar}
        hover={classes.hover}
      />
    </Container>
  );
};

export default BestCities;
