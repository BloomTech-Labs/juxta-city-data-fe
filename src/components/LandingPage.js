import React from 'react';
import { withAuth } from '@okta/okta-react';

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
