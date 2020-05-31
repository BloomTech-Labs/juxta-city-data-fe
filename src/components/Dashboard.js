import React, { useEffect, useContext } from "react";
import NavBar from "./Navbar.js";
import Header from "./pages/Header.js";
import RecommendedComponent from "./recomended/RecommendedComponent";
import BestCities from "./bestCities/BestCities";
import Favorites from "./Favorites/Favorites.js";
import { createUserContext } from "../functions";
import UserContext from "../contexts/UserContext";

function Dashboard(props) {
  const { setUserData } = useContext(UserContext);
  useEffect(() => {
    createUserContext().then((res) => setUserData(res));
  }, [setUserData]);
  return (
    <UserContext.Consumer>
        <NavBar {...props} />
        <Header />
        <RecommendedComponent {...props} />
        <Favorites />
        <BestCities />
    </UserContext.Consumer>
    
  );
}

export default Dashboard;
