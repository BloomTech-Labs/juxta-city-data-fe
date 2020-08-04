import React, { useContext, useEffect } from "react";
import CityContext from "../contexts/CityContext.js";
import NavBar from "./Navbar.js";
import CityViewHeader from "./subComponents/CityViewHeader.js";
import CityBody from "./subComponents/CityBody.js";
import { getCityData } from "../functions";
import TabBar from "./subComponents/TabBar";

import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
  },
}));

function SingleCityView(props) {
  const { cityData, setCityData } = useContext(CityContext);
  const classes = styles();
  useEffect(() => {
    if (!cityData.city && !localStorage.getItem("cityName")) {
      return props.history.replace("/dashboard");
    } else if (!cityData.city && localStorage.getItem("cityName")) {
      const city = localStorage.getItem("cityName");
      getCityData(city).then((newCity) => {
        // console.log(newCity);
        setCityData(newCity);
      });
    }
  }, [cityData.city, props.history, setCityData]);
  return !cityData ? (
    <NavBar {...props} />
  ) : (
    <div className={classes.root}>
      <NavBar {...props} />
      < TabBar />
    <div className="city-content">
      <CityViewHeader {...props} cityData={cityData} />
      <CityBody {...props} cityData={cityData} />
    </div>
    </div>
  );
}

export default SingleCityView;
