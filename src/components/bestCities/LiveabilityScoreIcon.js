import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  display: inline-block;
  background: #687fad;
  height: ${ props => props.height ? props.height + 'px' : '40px'};
  width: ${props => props.width ? props.width + 'px' : '30px'};
  border: 2px solid goldenrod;
`;

const ScoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Score = styled.p`
  color: white;
  font-size: ${props => props.fontSize ? props.fontSize + 'px' : '15px'};
  font-weight: bold;
`;


const LiveabilityScoreIcon = (props) => {
  return (
    <Icon {...props}>
      <ScoreBox>
        <Score {...props}>
          {props.score || 80}
        </Score>
      </ScoreBox>
    </Icon>
  );
};

export default LiveabilityScoreIcon;
