import React, { useState, useEffect } from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import CityContext from './contexts/CityContext.js';
import RecomendedContext from './contexts/RecomendedContext';
import styled from 'styled-components';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import LandingPage from './components/LandingPage.js';
import Dashboard from './components/Dashboard.js';
import Signin from './components/auth/SignIn.js';
import Profile from './components/pages/Profile.js';
import SingleCityView from './components/SingleCityView.js';
import SurveyQuestions from './components/surveyQuestions/SurveyQuestions.js';
import RecomendedDashboard from './components/recomended/RecomendedDashboard';

const AppDiv = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

const onAuthRequired = ({ history }) => {
  history.push('/signin');
};
const App = () => {
  const [cityData, setCityData] = useState({});
  const [userData, setUserData] = useState({});
  const [recomendedCity, setRecomendedCity] = useState([]);
  return (
    <Security
      issuer='https://dev-816550.okta.com/oauth2/default'
      clientId='0oa2kk6dn5jP7Eve04x6'
      redirectUri={window.location.origin + '/implicit/callback'}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <CityContext.Provider value={{ cityData, setCityData }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <RecomendedContext.Provider
            value={{ recomendedCity, setRecomendedCity }}
          >
            <AppDiv className='App'>
              <Route exact path='/' component={LandingPage} />
              <Route path='/dashboard' exact component={Dashboard} />
              <Route path='/cityview' exact component={SingleCityView} />
              <Route path='/survey' exact component={SurveyQuestions} />
              <Route
                path='/recommended'
                exact
                component={RecomendedDashboard}
              />
              <SecureRoute path='/profile' exact component={Profile} />
              <Route
                path='/signin'
                render={() => <Signin baseUrl='https://dev-816550.okta.com' />}
              />
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </AppDiv>
          </RecomendedContext.Provider>
        </UserContext.Provider>
      </CityContext.Provider>
    </Security>
  );
};

export default App;
