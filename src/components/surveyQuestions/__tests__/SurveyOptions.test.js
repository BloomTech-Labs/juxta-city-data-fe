import React from "react";
import { render } from "@testing-library/react";
import SurveyOptions from "../SurveyOptions";

it("renders the survey options", () => {
  const formState = {
    state: "None",
    population: "0",
    population_change: "0",
    median_age: "0",
    house_cost: "0",
    rental_cost: "0",
    population_density: "0",
    cost_of_living: "0",
    average_commute: "0",
    air_quality: "0",
  };
  let comp = render(<SurveyOptions formState={formState} />);
  expect(comp.getByTestId("radio-input-option")).toBeInTheDocument();
  expect(comp.getByTestId("option-label")).toBeInTheDocument();
});
