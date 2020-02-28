import React from 'react';
import styled from 'styled-components';

import HeartIcon from './HeartIcon';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeartCount = styled.p`
  font-size: 12px;
  color: white;
  margin: 0;
`;

const Likes = () => {
  return (
    <Wrapper>
      <HeartCount>45k</HeartCount>
      <HeartIcon></HeartIcon>
    </Wrapper>
  );
};

export default Likes;
