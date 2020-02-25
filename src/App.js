import React, { useContext } from "react";
import "./index.scss";
import { Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import styled from "styled-components";

import Header from "./components/Header.js";
import LandingPage from "./components/LandingPage.js";
import Dashboard from "./components/Dashboard.js";

const AppDiv = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <UserContext.Provider value={{ words: "hello" }}>
      <AppDiv className="App">
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" exact component={Dashboard} />
      </AppDiv>
    </UserContext.Provider>
  );
};

export default App;
