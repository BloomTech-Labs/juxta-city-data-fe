import React, {useContext, useEffect} from 'react';
import CityContext from '../contexts/CityContext.js';
import NavBar from './NavBar.js';
import { withAuth } from "@okta/okta-react";

function SingleCityView(props){
    const {cityData, setCityData} = useContext(CityContext)
    console.log(cityData)
    useEffect(()=> {
        if(!cityData.city){
            return props.history.push('dashboard');
        }
    },[])
    return(
        <div>
            <NavBar {...props}/>
    <p>city: {cityData.city}</p>
        </div>
    )
}

export default withAuth(SingleCityView);