import React, { useContext } from "react";
import "./index.scss";
import { Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import styled from "styled-components";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import LandingPage from "./components/LandingPage.js";
import Dashboard from "./components/Dashboard.js";
import Signin from "./components/auth/SignIn.js";
import Profile from "./components/pages/Profile.js";

const AppDiv = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
`;

const onAuthRequired = ({ history }) => {
  history.push("/signin");
};

const App = () => {
  return (
    <Security
      issuer="https://dev-816550.okta.com/oauth2/default"
      clientId="0oa2kk6dn5jP7Eve04x6"
      redirectUri={window.location.origin + "/implicit/callback"}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <UserContext.Provider value={{ words: "hello" }}>
        <AppDiv className="App">
          <Route exact path="/" component={LandingPage} />
          <SecureRoute path="/dashboard" exact component={Dashboard} />
          <SecureRoute path="/profile" exact component={Profile} />
          <Route
            path="/signin"
            render={() => <Signin baseUrl="https://dev-816550.okta.com" />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </AppDiv>
      </UserContext.Provider>
    </Security>
  );
};

export default App;
