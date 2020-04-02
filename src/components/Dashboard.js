import React from 'react';
import NavBar from './Navbar.js';
import Header from './pages/Header.js';
import BestCities from './bestCities/BestCities';
import Favorites from './Favorites/Favorites.js';
import { withAuth } from '@okta/okta-react';

function Dashboard(props) {
  return (
    <>
      <NavBar {...props} />
      <Header />
      <Favorites/>
      <BestCities />
    </>
  );
}

export default withAuth(Dashboard);
