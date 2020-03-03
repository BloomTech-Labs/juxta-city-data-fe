import React, {useState} from "react";
import Header from "../components/pages/Header.js";
import Trending from "../components/trendingCities/Trending.js";
import MarketingBox from "./MarketingBox.js";
import CityContext from '../contexts/CityContext.js';

const ContentBody = () => {
  const [cityData, setCityData] = useState({});
  return ( 
    <div>
      <CityContext.Provider value={{cityData, setCityData}}>
        <Header/>
        <Trending/>
        <MarketingBox/>
      </CityContext.Provider>
    </div>
  );
};
export default ContentBody;
