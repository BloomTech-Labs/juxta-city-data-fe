import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import styled from 'styled-components';
import Header from './pages/Header.js';
import BestCities from './bestCities/BestCities';
import MarketingBox from './MarketingBox.js';
import NavBar from './Navbar';

const LandingPage = props => {
  if(localStorage.getItem('token')){
    props.history.push('/dashboard')
  }
  return (
    <div>
      <NavBar {...props} />
      <Header />
      <BestCities />
      <MarketingBox />
    </div>
  );
};

export default withAuth(LandingPage);
