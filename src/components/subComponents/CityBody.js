import React from 'react';
import TabBar from './TabBar.js';
import CityContent from './CityContent.js';


export default function CityBody(props){
    return(
        <> 
            <TabBar {...props}/>
            <CityContent {...props}/>
        </>
    )
}