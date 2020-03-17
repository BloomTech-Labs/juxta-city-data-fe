import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Container } from '@material-ui/core';

import MaterialUiGridList from './MaterialUIGridList';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 52,
    marginBottom: 52,
  },
  titleBar: {
    background: 'none',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  hover: {
    '&:hover': {
      background: '#000',
      opacity: '0.8',
    },
  },
}));

const Heading = styled.h2`
  text-align: center;
`;

const Trending = () => {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width: 600px)');
  const [gridList, setGridList] = useState([]);

  useEffect(() => {
    const getBestCities = async () => {
      const res = await axios.get('https://junta-test.herokuapp.com/top25');
      setGridList(res.data);
    };

    getBestCities();
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

export default Trending;
