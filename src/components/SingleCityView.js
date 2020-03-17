import React, {useContext, useEffect} from 'react';
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
        if(!cityData.city){
            return props.history.replace('/dashboard');
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