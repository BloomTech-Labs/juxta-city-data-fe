import React from "react";
import CompareIcon from '../../assets/compare.png';
import PinIcon from '../../assets/pin.png';
import SearchIcon from '../../assets/search.png';
import { makeStyles } from '@material-ui/core/styles';
import {Container} from '@material-ui/core';


const styles = makeStyles(theme => ({
  root: {
    height: 380,
    margin: '0 auto 65px auto',
    boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.01)',
    maxWidth: 1100,
    [theme.breakpoints.down('md')]: {
      maxWidth: 900,
    },
    [theme.breakpoints.down('sm')]: {
      height: 617,
      width: '90%'
    }
  },
  header: {
    width: '100%',
    margin: '0 auto',
  },
  h4: {
    textAlign: 'center',
    fontSize: 36,
    paddingTop: 12,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      fontSize: 24,
      padding: '20px 0 0 40px'
    }
  },
  intro: {
    width: '75%',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    margin: '0 auto',
    marginBottom: 60,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      marginBottom: 25,
      lineHeight: 1
    }
  },
  IconBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  IconCard: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'row',
      margin: '25px 0',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  body: {
    fontWeight: 'normal',
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      paddingLeft: 30,
      width: '65%'
    }
  },
  img: {
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      width: '20%',
      margin: 0
    }
  }
}))

const IconBox = props => {
  const classes = styles();
  return (
      <div className={classes.root}>
        <div className={classes.header}>
          <h4 className={classes.h4}>"Find Ur" place</h4>
        <p className={classes.intro}>Findur is a place where you can learn
          , compare, and receive recommendations on cities across the United States!
        </p>
        </div>
        
        <div className={classes.IconBox}>
          <div className={classes.IconCard}>
            <img
              className={classes.img}
              src={CompareIcon}
            />
              <p className={classes.body}>Quickly compare up to 3 different cities
                side-by-side
              </p>
          </div>

          
          <div className={classes.IconCard}>
          <img className={classes.img} src={SearchIcon}/>
            <p className={classes.body}>Search for a city to view all the latest 
  information </p>
          </div>

          <div className={classes.IconCard}> 
            <img className={classes.img} src={PinIcon}/>
            <p className={classes.body}>Instantly receive a recommendation for the best place to live</p>  
          </div>
        </div>
      </div>      
  );
};
export default IconBox;
