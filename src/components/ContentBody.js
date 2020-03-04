import React, {useState} from "react";
import Header from "../components/pages/Header.js";
import Trending from "../components/trendingCities/Trending.js";
import MarketingBox from "./MarketingBox.js";

const ContentBody = () => {
  return ( 
    <div>
        <Header/>
        <Trending/>
        <MarketingBox/>
    </div>
  );
};
export default ContentBody;
