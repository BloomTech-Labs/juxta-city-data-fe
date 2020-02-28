import React from 'react';
import styled from 'styled-components';

import CityCard from './CityCard.js';

const Wrapper = styled.div`
  background: white;
  height: 410px;
  width: 90%;
`;

const Heading = styled.h2`
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const FeaturedCities = () => {
  return (
    <Wrapper>
      <Heading>Trending Cities</Heading>
      <Grid>
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </Grid>
    </Wrapper>
  );
};

export default FeaturedCities;
