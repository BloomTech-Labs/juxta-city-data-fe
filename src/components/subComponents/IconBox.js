import React from "react";
import { styled } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CompareIcon from '../../assets/compare.png';
import PinIcon from '../../assets/pin.png';
import SearchIcon from '../../assets/search.png';
import { fontSize, display } from "@material-ui/system";
import { blue } from "@material-ui/core/colors";
import { bold } from "ansi-colors";

const IconCard = styled(Card)({
  boxShadow: 'none',
  height: 250
});
const TypoH4 = styled(Typography)({
fontWeight: 'bold',
})
const TypoBody = styled(Typography)({
  width: '876px',
  margin: '0 auto',
  fontSize: '18px',
  marginBottom: 30
})
const IconBoxGrid = styled(Grid)({
  padding: '1% 1% -1%',
  maxWidth: '1100px',
  margin: '30px auto',
  boxShadow:' 0px 1px 12px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.01)',
  display: 'flex',
  flexDirection: 'column',
});
const TypoIcon =styled(Typography)({
  fontSize: 18
})


const IconBox = props => {
  return (
    <IconBoxGrid>
      <TypoH4 variant="h4" align='center' gutterBottom>"Find Ur" place</TypoH4>
      <TypoBody variant="body1" gutterBottom>Findur is a place where you can learn
        , compare, and receive recommendations on cities across the United States!
      </TypoBody>
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
              <TypoIcon variant="body1">Quickly compare up to 3 different cities
                side-by-side
              </TypoIcon>
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
              <TypoIcon variant="body1">Search for a city to view all the latest 
                information
              </TypoIcon>
            </CardContent>
          </IconCard>
        </Grid>
        <Grid item xs>
          <IconCard>
            <CardMedia
              component="img"
              image={PinIcon}
              title="Pin Icon"
              style={{ width: '74px', height: 'auto', margin: '20px auto 5px' }}
            />
            <CardContent>
              <TypoIcon variant="body1">Instantly receive a recommendation for
                the best place to live
              </TypoIcon>
            </CardContent>
          </IconCard>
        </Grid>
      </Grid>
    </IconBoxGrid>
  );
};
export default IconBox;
