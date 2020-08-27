import React, { useContext, useEffect } from "react";
import CityContext from "../contexts/CityContext.js";
import NavBar from "./Navbar.js";
import CityViewHeader from "./subComponents/CityViewHeader.js";
import CityBody from "./subComponents/CityBody.js";
import { getCityData } from "../functions";
import TabBar from "./subComponents/TabBar";

function SingleCityView(props) {
  const { cityData, setCityData } = useContext(CityContext);

  useEffect(() => {
    if (!cityData.city && !localStorage.getItem("cityName")) {
      return props.history.replace("/dashboard");
    } else if (!cityData.city && localStorage.getItem("cityName")) {
      const city = localStorage.getItem("cityName");
      getCityData(city).then((newCity) => {
        setCityData(newCity);
      });
    }
  }, [cityData.city, props.history, setCityData]);
  return !cityData ? (
    <NavBar {...props} />
  ) : (
    <div className='singleCityViewBox'  style={{backgroundColor: '#f8f8f8'}}>
      <NavBar {...props} />
      <TabBar />
    <div className="city-content">
      <CityViewHeader {...props} cityData={cityData} />
      <CityBody {...props} cityData={cityData} />
    </div>
    </div>
  );
}

export default SingleCityView;
