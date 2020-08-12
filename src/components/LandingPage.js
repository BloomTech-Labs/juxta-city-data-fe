import React from 'react';
import Header from './pages/Header.js';
import BestCities from './bestCities/BestCities';
import NavBar from './Navbar';
import SurveyBox from './subComponents/SurveyBox.js';

const LandingPage = (props) => {
  return (
    <div>
      <NavBar {...props} />
      <Header />
      <SurveyBox />
      <BestCities {...props} />
    </div>
  );
};

export default LandingPage;
