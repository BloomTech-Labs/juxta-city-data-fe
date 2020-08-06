import React from "react";
import { render } from "@testing-library/react";
import CityContent from "../CityContent.js";

it("should render four description boxes with data from props", () => {
  const cityData = {
    Population_Density: "Test Population_Density",
    Median_Age: "Test Median_Age",
    Rainday_Count: "Test Rainday_Count",
    Median_Rent: "Test Median_Rent",
  };

  const { getByText } = render(<CityContent cityData={cityData} />);

  const populationBox = getByText(/Test Population_Density/i);
  const climateBox = getByText(/Test Median_Age/i);
  const economyBox = getByText(/Test Rainday_Count/i);
  const livingCostBox = getByText(/Test Median_Rent/i);

  expect(populationBox).toBeInTheDocument();
  expect(climateBox).toBeInTheDocument();
  expect(economyBox).toBeInTheDocument();
  expect(livingCostBox).toBeInTheDocument();
});
