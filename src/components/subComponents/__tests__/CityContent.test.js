import React from "react";
import { render } from "@testing-library/react";
import CityContent from "../CityContent.js";

it("should render four description boxes with data from props", () => {
  const cityData = {
    population_desc: "Test description",
    climate_desc: "Test climate",
    economy_desc: "Test economy",
    living_cost_desc: "Test living cost",
  };

  const { getByText } = render(<CityContent cityData={cityData} />);

  const populationBox = getByText(/test description/i);
  const climateBox = getByText(/test climate/i);
  const economyBox = getByText(/test economy/i);
  const livingCostBox = getByText(/test living cost/i);

  expect(populationBox).toBeInTheDocument();
  expect(climateBox).toBeInTheDocument();
  expect(economyBox).toBeInTheDocument();
  expect(livingCostBox).toBeInTheDocument();
});
