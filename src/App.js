import React, { useState } from "react";
import "./index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import CityContext from "./contexts/CityContext.js";
import RecomendedContext from "./contexts/RecomendedContext";
import ProfileContext from "./contexts/ProfileContext.js";
import ModalContext from "./contexts/ModalContext.js";
import LandingPage from './components/LandingPage.js';
import Dashboard from './components/Dashboard.js';
import Authentication from './components/auth/Authentication.js';
import Profile from './components/pages/profile/Profile.js';
import SingleCityView from './components/SingleCityView.js';
import SurveyQuestions from './components/surveyQuestions/SurveyQuestions.js';
import RecomendedDashboard from './components/recomended/RecomendedDashboard';
import Footer from "./components/Footer";

const App = () => {
  const [userData, setUserData] = useState({});
  const [cityData, setCityData] = useState({});
  const [recomendedCity, setRecomendedCity] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [modal, setModal]= useState(false)

  return (
    <Router>
      <div className="App">
        <ModalContext.Provider value={{modal, setModal}}>
        <CityContext.Provider value={{ cityData, setCityData }}>
          <UserContext.Provider value={{ userData, setUserData }}>
            <RecomendedContext.Provider
              value={{ recomendedCity, setRecomendedCity }}>
              <ProfileContext.Provider value={{ profileData, setProfileData }}>
                <div>
                  <Route path='/' exact component={LandingPage} />
                  <Route path='/dashboard' exact component={Dashboard} />
                  <Route path='/cityview' exact component={SingleCityView} />
                  <Route path='/survey' exact component={SurveyQuestions} />
                  <Route path='/signin' exact component={Authentication} />
                  <Route path='/recommended' exact component={RecomendedDashboard} />
                  <Route path='/profile' exact component={Profile} />
                  <Footer/>
                </div>
              </ProfileContext.Provider>
            </RecomendedContext.Provider>
          </UserContext.Provider>
        </CityContext.Provider>
        </ModalContext.Provider>
      </div>
    </Router>
  );
};

export default App;
