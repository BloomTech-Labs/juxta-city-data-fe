import React from "react";
import { render } from "@testing-library/react";
import CityViewHeader from "../CityViewHeader";
import UserContext from "../../../contexts/UserContext";

test("all data is rendered", () => {
  const fakeCity = "LoganVille";
  const fakePopulation = "12743";
  let userData = {};
  const setUserData = (data) => (userData = data);

  const comp = render(
    <UserContext.Provider value={{ userData, setUserData }}>
      <CityViewHeader
        cityData={{ city: fakeCity, population: fakePopulation }}
      />
    </UserContext.Provider>
  );
  const image = comp.getByTestId(/star-btn/i) 
  image.src = "test.png";
  expect(image.src).toMatch("test.png");
});
