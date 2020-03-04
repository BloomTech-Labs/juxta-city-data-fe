import React, {useContext, useEffect} from 'react';
import CityContext from '../contexts/CityContext.js';
import NavBar from './NavBar.js';


export default function SingleCityView(props){
    const {cityData, setCityData} = useContext(CityContext)
    console.log(cityData)
    useEffect(()=> {
        if(!cityData[0].city){
            return props.history.push('dashboard');
        }
    },[])
    return(
        <div>
            <NavBar {...props}/>
    <p>city: {cityData[0].city}</p>
        </div>
    )
}