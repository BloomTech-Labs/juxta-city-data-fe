import React from "react";
import { styled } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const IconCard = styled(Card)({
  boxShadow: 'none',
  height: 250 
});

const IconBox = props => {
  return (
    <Container>
      <Grid>
        <Typography variant="h5" gutterBottom>"Find Ur" Place</Typography>
        <Typography variant="p" gutterBottom>Findur is a place where you can learn
          , compare, and receive recommendations on cities across the United States!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs>
            <IconCard>
              <CardContent>
                <Typography variant="p">Quickly compare up to 3 different cities
                  side-by-side
                </Typography>
              </CardContent>
            </IconCard>
          </Grid>
          <Grid item xs>
            <IconCard>
              <CardContent>
                <Typography variant="p">Search for a city to view all the latest 
                  information
                </Typography>
              </CardContent>
            </IconCard>
          </Grid>
          <Grid item xs>
            <IconCard>
              <CardContent>
                <Typography variant="p">Instantly receive a recommendation for
                  the best place to live
                </Typography>
              </CardContent>
            </IconCard>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default IconBox;
