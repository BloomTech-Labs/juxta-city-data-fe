import React from "react";
import { render } from "@testing-library/react";
import RecommendedCard from "../RecommendedCard";
import CityContext from "../../../contexts/CityContext";
import UserContext from "../../../contexts/UserContext";

it("renders the livability score", () => {
  const userData = {};
  const cityData = {livability_score: 56.5};
  const setCityData = (data) => (cityData = { ...cityData, data });
  const comp = render(
    <UserContext.Provider value={{ userData }}>
      <CityContext.Provider value={{ setCityData }}>
        <RecommendedCard cityData={cityData} />
      </CityContext.Provider>
    </UserContext.Provider>
  );
  expect(comp.getByText(/56.5/i)).toBeInTheDocument();
});
it("renders the city name", () => {
  const userData = {};
  const cityData = {name_and_state: "Seattle, Washington"};
  const setCityData = (data) => (cityData = { ...cityData, data });
  const comp = render(
    <UserContext.Provider value={{ userData }}>
      <CityContext.Provider value={{ setCityData }}>
        <RecommendedCard cityData={cityData} />
      </CityContext.Provider>
    </UserContext.Provider>
  );

  expect(comp.getByText(/Seattle, Washington/i)).toBeInTheDocument();
});

it("renders the heart icon", () => {
  const userData = {};
  const cityData = {};
  const setCityData = (data) => (cityData = { ...cityData, data });
  const comp = render(
    <UserContext.Provider value={{ userData }}>
      <CityContext.Provider value={{ setCityData }}>
        <RecommendedCard cityData={cityData} />
      </CityContext.Provider>
    </UserContext.Provider>
  );
  expect(comp.getByTestId(/star-btn/i)).toBeInTheDocument();
});
it("renders the poulation description", () => {
  const userData = {};
  const cityData = {population_desc: "test pop"};
  const setCityData = (data) => (cityData = { ...cityData, data });
  const comp = render(
    <UserContext.Provider value={{ userData }}>
      <CityContext.Provider value={{ setCityData }}>
        <RecommendedCard cityData={cityData} />
      </CityContext.Provider>
    </UserContext.Provider>
  );
  expect(comp.getByText(/test pop/i)).toBeInTheDocument();
});
