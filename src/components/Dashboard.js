import React from "react";
import NavBar from "./NavBar.js";
import Header from "./pages/Header.js";
import Trending from "./trendingCities/Trending";

export default function Dashboard(props) {
  return (
    <>
      <NavBar {...props}/>
      <Header/>
      <Trending/>
    </>
  );
}
