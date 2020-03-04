import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

import styled from "styled-components";
import Header from "./pages/Header.js";
import Trending from "./trendingCities/Trending.js";
import MarketingBox from './MarketingBox.js';


 const LandingPage = (props) => {
      return (
        <div>
          <Header/>
          <Trending/>
          <MarketingBox/>
        </div>
      );
  }

  export default withAuth(LandingPage)
