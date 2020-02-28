import React from 'react';
import styled from 'styled-components';

import FeaturedCities from './FeaturedCities.js';

const Section = styled.div`
  display: flex;
  justify-content: center;
  background: lightgrey;
  padding: 70px 0 70px 0;
`;

const Trending = () => {
  return (
    <Section>
      <FeaturedCities />
    </Section>
  );
};

export default Trending;
