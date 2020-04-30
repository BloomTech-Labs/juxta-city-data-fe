import React from "react";
import Header from "./pages/Header.js";
import BestCities from "./bestCities/BestCities";
import MarketingBox from "./MarketingBox.js";
import NavBar from "./Navbar";

const LandingPage = (props) => {
  return (
    <div>
      <NavBar {...props} />
      <Header />
      <BestCities />
      <MarketingBox />
    </div>
  );
};

export default LandingPage;
