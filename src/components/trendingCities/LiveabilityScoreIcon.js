import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #687fad;
  height: 40px;
  width: 30px;
  border: 2px solid goldenrod;
`;

const Score = styled.div`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

const LiveabilityScoreIcon = () => {
  return (
    <Icon>
      <Score>80</Score>
    </Icon>
  );
};

export default LiveabilityScoreIcon;
