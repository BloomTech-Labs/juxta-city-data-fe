import React, {useContext, useEffect, forceUpdate} from 'react';
import axios from 'axios';
import CityContext from '../contexts/CityContext.js';
import NavBar from './Navbar.js';
import CityViewHeader from './subComponents/CityViewHeader.js';
import CityBody from './subComponents/CityBody.js';
import { withAuth } from "@okta/okta-react";

import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const styles = makeStyles(theme => ({
    root: {
        margin: '0 auto'
    }
}))

function SingleCityView(props){
    const {cityData, setCityData} = useContext(CityContext)
    const classes = styles();
    useEffect(()=> {
        if(!cityData.city && !localStorage.getItem('cityName')){
            return props.history.replace('/dashboard');
        }else if(!cityData.city && localStorage.getItem('cityName')){
            const city = localStorage.getItem('cityName');
            axios.get(`https://junta-test.herokuapp.com/data?city=${city}`).then(newCity=> {
                setCityData(newCity.data)
                console.log(cityData)
            })
        }
    },[])
    return(
        <div className={classes.root}>
            <NavBar {...props}/>
            <CityViewHeader {...props} cityData={cityData}/>
            <CityBody {...props} cityData={cityData}/>
        </div>
    )
}

export default withAuth(SingleCityView);