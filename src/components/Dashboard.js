import React from 'react';
import NavBar from './Navbar.js';
import Header from './pages/Header.js';
import BestCities from './bestCities/BestCities';
import { withAuth } from '@okta/okta-react';

function Dashboard(props) {
  return (
    <>
      <NavBar {...props} />
      <Header />
      <BestCities />
    </>
  );
}

export default withAuth(Dashboard);
