import React from "react";
import { Route } from "react-router-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Navbar from "../Navbar.js";
import UserContext from "../../contexts/UserContext.js";
import ProfileContext from "../../contexts/ProfileContext.js";
import ModalContext from "../../contexts/ModalContext";

it("renders without crashing", () => {
  let userData = {};
  const setUserData = (data) => (userData = data);
  let profileData = {};
  const setProfileData = (data) => (profileData = data);
  const modal = "";
  render(
    <ModalContext.Provider value={{ modal }}>
    <UserContext.Provider value={{ userData, setUserData }}>
      <ProfileContext.Provider value={{ profileData, setProfileData }}>
      <Router>
        <Route
          path="/"
          render={({ history, location }) => (
            <Navbar history={history} location={location} />
          )}
        />
      </Router>
      </ProfileContext.Provider>
    </UserContext.Provider>
    </ModalContext.Provider>
  );
});

it("renders logo link", () => {
  let userData = {};
  const setUserData = (data) => (userData = data);
  let profileData = {};
  const setProfileData = (data) => (profileData = data);
  const modal = "";
  const { getByAltText } = render(
    <ModalContext.Provider value={{ modal }}>
    <UserContext.Provider value={{ userData, setUserData }}>
      <ProfileContext.Provider value={{ profileData, setProfileData }}>
      <Router>
        <Route
          path="/"
          render={({ history, location }) => (
            <Navbar history={history} location={location} />
          )}
        />
      </Router>
      </ProfileContext.Provider>
    </UserContext.Provider>
    </ModalContext.Provider>
  );

  const logo = getByAltText(/find ur city logo/i);
  expect(logo).toBeInTheDocument();
});

it("renders sign in / sign up link", () => {
  let userData = {};
  const setUserData = (data) => (userData = data);
  let profileData = {};
  const setProfileData = (data) => (profileData = data);
  const modal = "";
  const { getByText } = render(
    <ModalContext.Provider value={{ modal }}>
    <UserContext.Provider value={{ userData, setUserData }}>
      <ProfileContext.Provider value={{ profileData, setProfileData }}>
      <Router>
        <Route
          path="/"
          render={({ history, location }) => (
            <Navbar history={history} location={location} />
          )}
        />
      </Router>
      </ProfileContext.Provider>
    </UserContext.Provider>
    </ModalContext.Provider>
  );
  const linkElement = getByText(/sign in/i);
  expect(linkElement).toBeInTheDocument();
});
