import React, {useContext, useEffect} from 'react';
import CityContext from '../contexts/CityContext.js';
import NavBar from './NavBar.js';


export default function SingleCityView(props){
    const {cityData, setCityData} = useContext(CityContext)
    useEffect(()=> {
        if(!cityData.city){
            return props.history.push('dashboard');
        }
    },[])
    return(
        <div>
            <NavBar {...props}/>
            <p>city: {!cityData.city ? `${cityData.city} none` : `${cityData.city}`}</p>
        </div>
    )
}