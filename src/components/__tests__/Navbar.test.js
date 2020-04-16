import React from "react";
import { Route } from "react-router-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Navbar from "../Navbar.js";
import UserContext from "../../contexts/UserContext.js";

it("renders without crashing", () => {
  let userData = {};
  const setUserData = (data) => (userData = data);

  render(
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Route
          path="/"
          render={({ history, location }) => (
            <Navbar history={history} location={location} />
          )}
        />
      </Router>
    </UserContext.Provider>
  );
});

it("renders logo link", () => {
  let userData = {};
  const setUserData = (data) => (userData = data);

  const { getByAltText } = render(
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Route
          path="/"
          render={({ history, location }) => (
            <Navbar history={history} location={location} />
          )}
        />
      </Router>
    </UserContext.Provider>
  );

  const logo = getByAltText(/find ur city logo/i);
  expect(logo).toBeInTheDocument();
});

it("renders sign in / sign up link", () => {
  let userData = {};
  const setUserData = (data) => (userData = data);

  const { getByText } = render(
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Route
          path="/"
          render={({ history, location }) => (
            <Navbar history={history} location={location} />
          )}
        />
      </Router>
    </UserContext.Provider>
  );
  const linkElement = getByText(/sign in \/ sign up/i);
  expect(linkElement).toBeInTheDocument();
});
