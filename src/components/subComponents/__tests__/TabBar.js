import React from "react";
import { render } from "@testing-library/react";
import TabBar from "../TabBar.js";

it("should render tabs with values", () => {
  const { getByText } = render(<TabBar />);

  const populationTab = getByText(/population/i);
  const climateTab = getByText(/climate/i);
  const economyTab = getByText(/economy/i);
  const colTab = getByText(/cost of living/i);

  expect(populationTab).toBeInTheDocument();
  expect(climateTab).toBeInTheDocument();
  expect(economyTab).toBeInTheDocument();
  expect(colTab).toBeInTheDocument();
});
