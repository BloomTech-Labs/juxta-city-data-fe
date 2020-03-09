import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import MaterialUiGridList from './MaterialUIGridList';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 52,
    marginBottom: 52,
    maxWidth: '90%',
    margin: '0 auto',
  },
  titleBar: {
    background: 'none',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

const Heading = styled.h2`
  text-align: center;
`;

const Trending = () => {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width: 1023px)');
  const [gridList, setGridList] = useState([]);

  useEffect(() => {
    const getBestCities = async () => {
      const res = await axios.get('https://junta-test.herokuapp.com/top25');
      setGridList(res.data);
    };

    getBestCities();
  }, []);

  return (
    <div className={classes.root}>
      <Heading>Best Cities</Heading>
      <MaterialUiGridList mobile={mobile} gridList={gridList} />
    </div>
  );
};

export default Trending;
