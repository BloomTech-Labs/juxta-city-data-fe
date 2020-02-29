import React from "react";
import { styled } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LiveabilityScoreIcon from '../trendingCities/LiveabilityScoreIcon';

const Liveability = props => {
  return (
    <Container style={{ backgroundColor: '#F4F4F4', padding: '3% 10% 7%' }}>
      <Container style={{ marginBottom: 50 }}>
        <Typography variant="h4" align="center" >
          The Liveability Score
          <LiveabilityScoreIcon
            height={80}
            width={60}
            fontSize={30}
            style={{
              marginLeft: '25px',
              paddingRight: '12px'
            }}
          />
        </Typography>
      </Container>
      <Container>
        <Typography variant="body1">
          The Liveability score was designed to help you find the best places 
          to live.  It is created using a unique algorithm that takes into 
          account over 15 characteristics including nearby population change,
          cost of living, crime rates, employment, housing and more!  A total
          Liveability Score is then calculated out of 100 for any area across.
        </Typography>
      </Container>
    </Container>
  );
};
export default Liveability;
