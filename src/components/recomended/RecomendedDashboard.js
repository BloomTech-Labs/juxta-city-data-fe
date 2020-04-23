import React ,{useEffect, useState, useContext}from 'react';
import NavBar from '../Navbar';
import RecommendedCard from './RecommendedCard';
import {useStyles} from './recommendedStyles';
import cityscape from '../../assets/cityscape.png';
import RecommendedContext from '../../contexts/RecomendedContext';
import { Link } from 'react-router-dom';

export default function RecommendedDashboard({ auth, history, location }) {
  const {recomendedCity} = useContext(RecommendedContext);
  const classes = useStyles();
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setCities(recomendedCity);
    console.log(recomendedCity)
    if(recomendedCity.length === 0){
      history.push('/dashboard')
    }
  },[recomendedCity, history])
  const props = { auth, history, location};
  return (
      <div className={classes.root}>
          <NavBar {...props}/>
          <div className={classes.header}>
              <h1 className={classes.heading}>Your Recommended Cities</h1>
          </div>
          <div className={classes.cardBox}>
              {cities? cities.map(city => (
                  <RecommendedCard key={city.id} {...props} cityData={city}/>
              )): <></>}
              <img src={cityscape} className={classes.cityscape} alt='cityscape'/>
          </div>
          <Link to='/dashboard'>Dashboard</Link>
      </div>
  )
}

