import React from 'react';
import Header from './pages/Header.js';
import BestCities from './bestCities/BestCities';
import NavBar from './Navbar';

const LandingPage = (props) => {
  return (
    <div>
      <NavBar {...props} />
      <Header />
      <BestCities {...props} />
    </div>
  );
};

export default LandingPage;
