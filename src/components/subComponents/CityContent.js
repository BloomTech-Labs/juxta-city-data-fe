import React from 'react';
import EconomyGraph from './industryGraph/EconomyGraph.js';
import Population from './descriptions/Population';
import Climate from './descriptions/Climate';
import Economy from './descriptions/Economy';
import CostOfLiving from './descriptions/CostOfLiving';
import Health from './descriptions/Health';

export default function CityContent(props) {
  return (
    <div className='desctiption-container'>
      <Population {...props} title={'Population'} data={props.cityData} />
      <Climate {...props} title={'Climate'} data={props.cityData} />
      <Economy {...props} title={'Economy'} data={props.cityData} />

      {props.cityData.Most_Common_Industries === 'No Data Available' ? null : (
        <EconomyGraph {...props} cityData={props.cityData} />
      )}
      
      <CostOfLiving {...props} title={'Cost of Living'} data={props.cityData} />
      <Health {...props} title={'Health Data'} />
    </div>
  );
}
