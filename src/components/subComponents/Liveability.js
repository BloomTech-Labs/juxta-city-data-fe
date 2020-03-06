import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LiveabilityScoreIcon from '../trendingCities/LiveabilityScoreIcon';

const Liveability = props => {
  return (
    <Container style={{maxWidth: 1100, padding: '1.5% 2.5% 1%' ,boxShadow:' 0px 1px 12px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.01)'}}>
      <Container style={{ marginBottom: 50, }}>
        <Typography variant="h4" align="center" style={{ fontWeight: 700, fontSize: 40 }} >
          The Liveability Score
          <LiveabilityScoreIcon
            height={80}
            width={60}
            fontSize={30}
            style={{
              marginLeft: '25px',
              paddingRight: '12px',
            }}
          />
        </Typography>
      </Container>
      <Container>
        <Typography variant="body1" style={{lineHeight: 1.3}}>
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
