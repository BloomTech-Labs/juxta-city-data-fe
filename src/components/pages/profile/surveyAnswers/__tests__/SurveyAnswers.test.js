import React from "react";
import { render } from "@testing-library/react";
import SurveyAnswers from "../SurveyAnswers";
import SurveyAnswersBox from "../SurveyAnswersBox";
import ProfileContext from "../../../../../contexts/ProfileContext";

it("should render the 'retake survey button' when surveuinfo is not null", () => {
  let profileData = [{
    surveyinfo: {
      state: "None",
      population: "4",
      population_change: "0",
      median_age: "4",
      house_cost: "0",
    },
    
  }];
const setProfileData = (data) => (profileData = data);
  const { getByText } = render(
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      <SurveyAnswersBox >
       <SurveyAnswers />
      </SurveyAnswersBox>
    </ProfileContext.Provider>
  );
  const retakeSurveyBtn = getByText(/Retake the survey/i);
  expect(retakeSurveyBtn).toBeInTheDocument();
});


it("renders 'Take the survey button' and asks to take survey when surveyinfo is null", () => {
  let profileData = [{
    surveyinfo: null,
  }];
  const setProfileData = (data) => (profileData = data);

  let comp = render(
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      <SurveyAnswersBox >
       <SurveyAnswers />
      </SurveyAnswersBox>
    </ProfileContext.Provider>
  );
  expect(comp.getByText(/Your Survey Answers/i)).toBeInTheDocument();
  expect(comp.getByText(/Take the survey/i)).toBeInTheDocument();
  expect(comp.getByText(/Please complete survey!/i)).toBeInTheDocument();
});
