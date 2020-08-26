import React from "react";
import { render } from "@testing-library/react";
import SurveyAnswersBox from "../surveyAnswersBox";
import ProfileContext from "../../../../../contexts/ProfileContext";
import { getSurveyData } from '../../../../surveyQuestions/SurveyFunctions';
import axios from 'axios';

jest.mock('axios');

it("renders without crashing", async () => {
  let profileData = [{
    address: "123 street st",
    city: "Chicago",
    cloudinary_id: "alc2a9zgcbunhxqoanzg",
    dob: null,
    email: "dbjsk@hdj.skdj",
    first_name: "User7030",
    id: 137,
    image_url:
      "http://res.cloudinary.com/dxom5ezr9/image/upload/v1594239451/alc2a9zgcbunhxqoanzg.jpg",
    last_name: "Nolast name",
    password: "$2a$12$n0JRfvfnZ3loQGvY1k8toeSDSB/eD1G.5vq7h0UU//EQR98f1RKRe",
    state: "IL",
    surveyinfo: {
      state: "None",
      population: "4",
      population_change: "0",
      median_age: "4",
      house_cost: "0",
    },
    user_id: 137,
    username: "sjhj",
    zip: 12543,
  }];
  const setProfileData = (data) => (profileData = data);
 const surveyQues = [
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
  }
]

axios.get.mockResolvedValue({ data: surveyQues });
const surveyData = await getSurveyData();

  let comp = render(
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      <SurveyAnswersBox surveyData={surveyData} profileData={profileData}/>
    </ProfileContext.Provider>
  );
  expect(surveyData).toEqual(surveyQues);
  expect(comp.getByText(/Your Survey Answers/i)).toBeInTheDocument();
  expect(comp.getByText(/Retake the survey/i)).toBeInTheDocument();
});
