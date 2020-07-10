import React from "react";
import { render } from "@testing-library/react";
import SurveyQuestionForm from "../SurveyQuestionForm";

it("renders the survey options", () => {
  const surveyData = [
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
    },
    {
      id: 2,
      question: "What is your age group?",
      name: "median_age",
      options: [
        { id: 6, description: "17 and younger", value: "1" },
        { id: 7, description: "18 - 29", value: "2" },
        { id: 8, description: "30 - 46", value: "3" },
        { id: 9, description: "47 - 65", value: "4" },
        { id: 10, description: "66+", value: "5" },
      ],
    },
    {
      id: 3,
      question: "What is the population of your dream city?",
      name: "population",
      options: [
        { id: 11, description: "No preference", value: "1" },
        { id: 12, description: "Below 10k", value: "2" },
        { id: 13, description: "10K - 30K", value: "3" },
        { id: 14, description: "31k - 99k", value: "4" },
        { id: 15, description: "Above 1 million", value: "5" },
      ],
    },
    {
      id: 4,
      question: "What is a reasonable commute time for routine travel?",
      name: "average_commute",
      options: [
        { id: 16, description: "No preference", value: "1" },
        { id: 17, description: "0 - 10 minutes", value: "2" },
        { id: 18, description: "10 - 20 minutes", value: "3" },
        { id: 19, description: "20 - 30 minutes", value: "4" },
        { id: 20, description: "45+ minutes", value: "5" },
      ],
    },
  ];
  const formState = { cost_of_living: "0" };

  let comp = render(<SurveyQuestionForm surveyData={surveyData}  formState={formState}/>);
  expect(comp.getByTestId("submit-survey-button")).toBeInTheDocument();
  expect(comp.getByTestId("survey-form")).toBeInTheDocument();
});