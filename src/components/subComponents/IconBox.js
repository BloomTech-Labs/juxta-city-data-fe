import React from "react";
import CompareIcon from '../../assets/compare.png';
import PinIcon from '../../assets/pin.png';
import SearchIcon from '../../assets/search.png';
import { makeStyles } from '@material-ui/core/styles';
import IconCard from './IconCard'

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
  }
}))

const IconBox = props => {
  const classes = styles();
  return (
      <div id='about'className={classes.root}>
        <div className={classes.header}>
          <h4 className={classes.h4}>"Find Ur" place</h4>
        <p className={classes.intro}>Findur is a place where you can learn
          , compare, and receive recommendations on cities across the United States!
        </p>
        </div>
        
        <div className={classes.IconBox}>
          <IconCard image={{src:CompareIcon ,alt:'Compare Icon'}} body={'Quickly compare different cities'}/>
          <IconCard image={{src:SearchIcon ,alt:'Search Icon'}} body={'Search for a city to view all the latest information'}/>
          <IconCard image={{src:PinIcon, alt:'Pin Icon'}} body={'Instantly receive a recommendation for the best place to live'}/>
        </div>
      </div>      
  );
};
export default IconBox;
