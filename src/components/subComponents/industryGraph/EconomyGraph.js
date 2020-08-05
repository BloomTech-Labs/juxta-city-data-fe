import React, { useContext } from 'react';
import CityContext from '../../../contexts/CityContext';
import { convertStringToObject, changeKeyNames } from './graphFunctions';
import BarGraph from './BarGraph';

function EconomyGraph() {
  const { cityData } = useContext(CityContext);

  const economyDataString = cityData.Most_Common_Industries;
  // save the data to the local storage and then we get it from there and use

  localStorage.setItem('economyDataString', economyDataString);
  const localdata = localStorage.getItem('economyDataString');
  // console.log(economyDataString, " economyDataString");

  const economyDataStringLocal = localdata.split("'");
  const economyObject = convertStringToObject(economyDataStringLocal);

  let arrOfIndustries = changeKeyNames(economyObject);

  return <BarGraph arrOfIndustries={arrOfIndustries} />;
}
export default EconomyGraph;
