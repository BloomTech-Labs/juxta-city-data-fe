import React from "react";
import { render } from "@testing-library/react";
import LiveabilityScoreIcon from "../LiveabilityScoreIcon.js";

it("should render a score based on props", () => {
  const { getByText } = render(<LiveabilityScoreIcon score={90} />);

  const icon = getByText(/90/);

  expect(icon).toBeInTheDocument();
});
