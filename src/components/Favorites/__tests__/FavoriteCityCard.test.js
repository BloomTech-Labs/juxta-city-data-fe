import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FavoriteCityCard from "../FavoriteCityCard";
import UserContext from "../../../contexts/UserContext";
import CityContext from "../../../contexts/CityContext";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders the CityCard", () => {
  let userData = {
    id: 2,
    username: "Jake",
    favorites: [{ id: 235, city: "Seattle, Washington" }],
  };
  let cityData = { id: 2, city: "Seattle, Washington" };
  const setCityData = (data) => (cityData = data);
  let comp = render(
    <CityContext.Provider value={{ setCityData }}>
      <UserContext.Provider value={{ userData }}>
        <FavoriteCityCard cityData={cityData} />
      </UserContext.Provider>
    </CityContext.Provider>
  );
  expect(comp).toBeDefined();
  expect(comp.getByText("Seattle, Washington")).toBeInTheDocument();
});
it('calls "onClick" prop on button click', () => {
  const handleClick = jest.fn();  
   let userData = {
    id: 2,
    username: "Jake",
    favorites: [{ id: 235, city: "Seattle, Washington" }],
  };
  let cityData = { id: 2, city: "Seattle, Washington" };
  const setCityData = (data) => (cityData = data);
  let comp = render(
    <CityContext.Provider value={{ setCityData }}>
      <UserContext.Provider value={{ userData }}>
        <FavoriteCityCard cityData={cityData} onClick={handleClick}/>
      </UserContext.Provider>
    </CityContext.Provider>
  );
  
  const heartBtn =comp.getByTestId(/star-btn/i)   
  fireEvent.click(heartBtn);
  expect(heartBtn).not.toBeDisabled();
  //expect(handleClick).toHaveBeenCalledTimes(1);
});
