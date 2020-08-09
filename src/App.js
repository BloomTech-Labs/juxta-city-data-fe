import React, { useState } from 'react';
import './index.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import CityContext from './contexts/CityContext.js';
import RecomendedContext from './contexts/RecomendedContext';
import ProfileContext from './contexts/ProfileContext.js';
import styled from 'styled-components';

import LandingPage from './components/LandingPage.js';
import Dashboard from './components/Dashboard.js';
import Authentication from './components/auth/Authentication.js';
import Profile from './components/pages/profile/Profile.js';
import SingleCityView from './components/SingleCityView.js';
import SurveyQuestions from './components/surveyQuestions/SurveyQuestions.js';
import RecomendedDashboard from './components/recomended/RecomendedDashboard';

const Darken = styled.div`
  position: absolute;
  zindex: 1;
  width: 100%;
  height: 200vh;
  background: rgba(0, 0, 0, 0.5);
  top: 80px;
  transition: ease-in-out 2s;
  @media screen and(max-width: 600px) {
    top: 80px;
  }
`;
const handleClick = (e) => {
  let background = document.getElementById('darken');
  background.style.display = 'none';
  // let arrow = document.getElementById("dropdown");
  // console.log(arrow);
};
const App = () => {
  const [userData, setUserData] = useState({});
  const [cityData, setCityData] = useState({});
  const [recomendedCity, setRecomendedCity] = useState([]);
  const [profileData, setProfileData] = useState({});
  // console.log(profileData, "profiledata in appJSS");

  return (
    <Router>
      <div className="App">
        <Darken id="darken" onClick={handleClick} style={{ display: "none" }} />
        <CityContext.Provider value={{ cityData, setCityData }}>
          <UserContext.Provider value={{ userData, setUserData }}>
            <RecomendedContext.Provider
              value={{ recomendedCity, setRecomendedCity }}>
              <ProfileContext.Provider value={{ profileData, setProfileData }}>
                <div className='App'>
                  <Route path='/' exact component={LandingPage} />
                  <Route path='/dashboard' exact component={Dashboard} />
                  <Route path='/cityview' exact component={SingleCityView} />
                  <Route path='/survey' exact component={SurveyQuestions} />
                  <Route path='/signin' exact component={Authentication} />
                  <Route
                    path='/recommended'
                    exact
                    component={RecomendedDashboard}
                  />
                  <Route path='/profile' exact component={Profile} />
                </div>
              </ProfileContext.Provider>
            </RecomendedContext.Provider>
          </UserContext.Provider>
        </CityContext.Provider>
      </div>
    </Router>
  );
};

export default App;
