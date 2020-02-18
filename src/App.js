import React, {useContext} from 'react';
import './index.scss';
import {Route} from 'react-router-dom';
import {UserContext} from './contexts/UserContext';

import LandingPage from './components/LandingPage.js';

function App() {
  return (
    <UserContext.Provider value={{words: 'hello'}}>
      <div className="App">
        <Route exact path='/' component={LandingPage}/>
      </div>
    </UserContext.Provider>
    
  );
}

export default App;
