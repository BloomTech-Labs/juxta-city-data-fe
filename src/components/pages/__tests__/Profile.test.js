import React from "react";
import { render } from "@testing-library/react";
import Profile from "../profile/Profile";
import { Route } from "react-router-dom";
import { MemoryRouter as Router } from "react-router-dom";
import UserContext from "../../../contexts/UserContext.js";
import ProfileContext from "../../../contexts/ProfileContext";

jest.mock("../profile/Profile");

it("renders without crashing", () => {
  let userData = {};
  const setUserData = (data) => ( userData= data);

  let profileData = {};
  const setProfileData = (data) => ( profileData= data);
  
  let profileComp = render(
    <UserContext.Provider value={{ userData, setUserData }}>
      <ProfileContext.Provider value={{ profileData, setProfileData }}>
        <Router>
          <Route
            path="/profile"
            render={({ history, location }) => (
              <Profile history={history} location={location} />
            )}
          />
        </Router>
      </ProfileContext.Provider>
    </UserContext.Provider>
  );
expect(profileComp).toBeDefined()
  // expect(getByText(/user profile goes here!/i)).toBeInTheDocument();
  // expect(getByText(/welcome user!/i)).toBeInTheDocument();
});
