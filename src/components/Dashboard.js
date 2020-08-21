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
  }, [ setUserData]);

  return (   
    <div>
        <NavBar {...props}/>
        <Header />
        <RecommendedComponent {...props} />
        <Favorites {...props}/>
        <BestCities {...props}/>
    </div>
    
  );
}

export default Dashboard;
