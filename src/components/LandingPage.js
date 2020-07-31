import React , { useEffect, useContext } from "react";
import Header from "./pages/Header.js";
import BestCities from "./bestCities/BestCities";
import MarketingBox from "./MarketingBox.js";
import NavBar from "./Navbar";
import { createUserContext } from "../functions";
import UserContext from "../contexts/UserContext";

const LandingPage = (props) => {
  
  const { setUserData } = useContext(UserContext);
  useEffect(() => {
    createUserContext().then((res) => setUserData(res));
  }, [ setUserData]);

  return (
    <div>
      <NavBar {...props} />
      <Header />
      <BestCities {...props} />
      <MarketingBox />
    </div>
  );
};

export default LandingPage;
