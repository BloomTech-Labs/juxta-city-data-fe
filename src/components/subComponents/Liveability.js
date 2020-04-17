import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LiveabilityScoreIcon from '../../assets/liveabilityscore.png';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  container: {
    height: 260,
    [theme.breakpoints.down('sm')]: {
      minHeight: 455,
      width: '90%'
    },
  },
  h4: {
    fontWeight: 700,
    fontSize: 40,
    textAlign: 'center',
    margin: 0,
    paddingBottom: 55,
    [theme.breakpoints.down('sm')]: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 28,
      padding: 5,
      margin: '50px 0 0 22px',
    }
  },
  Icon : {
    position: 'absolute',
    marginLeft: 15,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      width: 45,
      alignSelf: 'flex-end',
      marginLeft: '80%'
    }
  }
  
}))
const Liveability = props => {
  const classes = styles();
  return (
    <Container
      className={classes.container}
      style={{
        maxWidth: 1100,
        padding: '3.5% 2.5% 2%',
        boxShadow:
          ' 0px 1px 12px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.01)',
      }}
    >
      <Container className={classes.heading}>
        <h4
          className={classes.h4}
        >
          The Liveability Score
          <img className={classes.Icon} src={LiveabilityScoreIcon} alt='livability score icon'/>

        </h4>
      </Container>
      <Container>
        <Typography variant='body1' style={{ lineHeight: 1.3}}>
          The Liveability score was designed to help you find the best places to
          live. It is created using a unique algorithm that takes into account
          over 15 characteristics including nearby population change, cost of
          living, crime rates, employment, housing and more! A total Liveability
          Score is then calculated out of 100 for any area across.
        </Typography>
      </Container>
    </Container>
  );
};
export default Liveability;
