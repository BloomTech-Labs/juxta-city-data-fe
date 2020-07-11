import React from "react";
import { render } from "@testing-library/react";
import SurveyQuestion from "../SurveyQuestion";

it("renders the survey options", () => {
  const item = 
    {
      id: 1,
      question: "What is an acceptable cost of living index for your new city?",
      name: "cost_of_living",
      options: [
        { id: 1, description: "Very low 75", value: "1" },
        { id: 2, description: "Low 76 - 99", value: "2" },
        { id: 3, description: "Medium 100 - 110", value: "3" },
        { id: 4, description: "High 111 - 149", value: "4" },
        { id: 5, description: "Very high 150+", value: "5" },
      ],
    }
    const formState = {cost_of_living: "0"};
    
  let comp = render(<SurveyQuestion item={item} formState={formState} />);
  expect(comp.getByTestId("question")).toBeInTheDocument();
  expect(comp.getByTestId("options-list")).toBeInTheDocument();
});
