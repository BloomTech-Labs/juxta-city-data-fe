import React, { useState, useMemo } from 'react';
import './index.scss';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import CityContext from './contexts/CityContext.js';
import RecomendedContext from './contexts/RecomendedContext';
import styled from 'styled-components';

import LandingPage from './components/LandingPage.js';
import Dashboard from './components/Dashboard.js';
import Authentication from './components/auth/Authentication.js';
import {Profile} from './components/pages/Profile.js';
import SingleCityView from './components/SingleCityView.js';
import SurveyQuestions from './components/surveyQuestions/SurveyQuestions.js';
import RecomendedDashboard from './components/recomended/RecomendedDashboard';


const AppDiv = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;
const Darken = styled.div`
  position: absolute;
  zIndex: 1;
  width: 100%;
  height: 200vh;
  background: rgba(0,0,0,0.5);
  top: 80px;
  transition: ease-in-out 2s;
  @media screen and(max-width: 600px) {
    top: 80px
  }`
const handleClick = e => {
  let background = document.getElementById('darken');
  background.style.display = 'none';
  let arrow = document.getElementById('dropdown')
  console.log(arrow)
}
const App = () => {
  const [userData, setUserData] = useState({});//created state for user
  const [cityData, setCityData] = useState({});
  //const value = useMemo(() => ({userData, setUserData}), [userData, setUserData]);//set state dependency array to setUser
  const [recomendedCity, setRecomendedCity] = useState([]);
  return (
  <Router>
    <div>
      <Darken id='darken' onClick={handleClick}style={{display: 'none'}}/>
      <CityContext.Provider value={{ cityData, setCityData }}>
        <UserContext.Provider value={{userData, setUserData}}>
          <RecomendedContext.Provider
            value={{ recomendedCity, setRecomendedCity }}
          >
            <AppDiv className='App'>
              <Route exact path='/' component={LandingPage} />
              <Route path='/dashboard' exact component={Dashboard} />
              <Route path='/cityview' exact component={SingleCityView} />
              <Route path='/survey' exact component={SurveyQuestions} />
              <Route exact path='/signin' component={Authentication}/>
              <Route
                path='/recommended' exact component={RecomendedDashboard}/>
            <Route path='/profile' exact component={Profile} />
              
            </AppDiv>
          </RecomendedContext.Provider>
        </UserContext.Provider>
      </CityContext.Provider>
    </div>
   </Router>
  );
};

export default App;
