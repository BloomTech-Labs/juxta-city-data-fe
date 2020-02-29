import React from "react";
import { styled } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CompareIcon from '../../assets/compare.png';
import PinIcon from '../../assets/pin.png';
import SearchIcon from '../../assets/search.png';

const IconCard = styled(Card)({
  boxShadow: 'none',
  height: 250 
});

const IconBox = props => {
  return (
    <Grid>
      <Typography variant="h5" gutterBottom>"Find Ur" Place</Typography>
      <Typography variant="body2" gutterBottom>Findur is a place where you can learn
        , compare, and receive recommendations on cities across the United States!
      </Typography>
      <Grid container>
        <Grid item xs>
          <IconCard>
            <CardMedia
              component="img"
              image={CompareIcon}
              title="Compare Icon"
              style={{ width: '100px', height: 'auto', margin: '20px auto 5px' }}
            />
            <CardContent>
              <Typography variant="body1">Quickly compare up to 3 different cities
                side-by-side
              </Typography>
            </CardContent>
          </IconCard>
        </Grid>
        <Grid item xs>
          <IconCard>
            <CardMedia
              component="img"
              image={SearchIcon}
              title="Search Icon"
              style={{ width: '100px', height: 'auto', margin: '20px auto 5px' }}
            />
            <CardContent>
              <Typography variant="body1">Search for a city to view all the latest 
                information
              </Typography>
            </CardContent>
          </IconCard>
        </Grid>
        <Grid item xs>
          <IconCard>
            <CardMedia
              component="img"
              image={PinIcon}
              title="Pin Icon"
              style={{ width: '100px', height: 'auto', margin: '20px auto 5px' }}
            />
            <CardContent>
              <Typography variant="body1">Instantly receive a recommendation for
                the best place to live
              </Typography>
            </CardContent>
          </IconCard>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default IconBox;
