import React, { useContext } from "react";
import "./index.scss";
import { Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import styled from "styled-components";

import LandingPage from "./components/LandingPage.js";

const AppDiv = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <UserContext.Provider value={{ words: "hello" }}>
      <AppDiv className="App">
        <Route exact path="/" component={LandingPage} />
      </AppDiv>
    </UserContext.Provider>
  );
};

export default App;
