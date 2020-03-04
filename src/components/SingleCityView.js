import React, {useContext} from 'react';
import CityContext from '../contexts/CityContext.js';
import NavBar from './NavBar.js';


export default function SingleCityView(props){
    const {cityData, setCityData} = useContext(CityContext)
    console.log(props)
    console.log(cityData)
    return(
        <div>
            <NavBar {...props}/>
            <p>city: {!cityData.city ? `${cityData.city} none` : `${cityData.city}`}</p>
        </div>
    )
}