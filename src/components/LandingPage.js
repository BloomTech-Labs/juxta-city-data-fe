import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

import styled from "styled-components";
import Header from "./pages/Header.js";
import Trending from "./trendingCities/Trending.js";
import MarketingBox from './MarketingBox.js';
import NavBar from './NavBar';


 const LandingPage = (props) => {
      return (
        <div>
          <NavBar {...props}/>
          <Header/>
          <Trending/>
          <MarketingBox/>
        </div>
      );
  }

  export default withAuth(LandingPage)
