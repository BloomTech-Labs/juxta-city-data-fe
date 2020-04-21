import React, { useState} from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import CityContext from './contexts/CityContext.js';
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

const onAuthRequired = ({ history }) => {
  history.push('/signin');
};
const App = () => {
  const [cityData, setCityData] = useState({});
  const [userData, setUserData] = useState({});
  return (
    <Security
      issuer='https://dev-816550.okta.com/oauth2/default'
      clientId='0oa2kk6dn5jP7Eve04x6'
      redirectUri={window.location.origin + '/implicit/callback'}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <Darken id='darken' style={{display: 'none'}}/>
      <CityContext.Provider value={{ cityData, setCityData }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <AppDiv className='App'>
            <Route exact path='/' component={LandingPage} />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/cityview' exact component={SingleCityView} />
            <Route path='/survey' exact component={SurveyQuestions} />
            <Route path='/recommended' exact component={RecomendedDashboard} />
            <SecureRoute path='/profile' exact component={Profile} />
            <Route
              path='/signin'
              render={() => <Signin baseUrl='https://dev-816550.okta.com' />}
            />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </AppDiv>
        </UserContext.Provider>
      </CityContext.Provider>
    </Security>
  );
};

export default App;
