import React from 'react';
import styled from 'styled-components';

import LiveablilityScoreIcon from './LiveabilityScoreIcon.js';
import Likes from './Likes.js';

const Wrapper = styled.div`
  width: 20%;
`;

const CityName = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 280px;
  background: lightgrey;
`;

const CityCard = () => {
  return (
    <Wrapper>
      <CityName>Seattle, WA</CityName>
      <Card>
        <Likes />
        <LiveablilityScoreIcon />
      </Card>
    </Wrapper>
  );
};

export default CityCard;
