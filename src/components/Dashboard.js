import React from "react";
import NavBar from "./Navbar.js";
import Header from "./pages/Header.js";
import Trending from "./trendingCities/Trending";
import { withAuth } from "@okta/okta-react";

function Dashboard(props) {
  return (
    <>
      <NavBar {...props}/>
      <Header/>
      <Trending/>
    </>
  );
}

export default withAuth(Dashboard);
