import React from "react";
import SurveyQuestions from "../SurveyQuestions";
import UserContext from "../../../contexts/UserContext.js";
import ProfileContext from "../../../contexts/ProfileContext";
import RecomendedContext from "../../../contexts/RecomendedContext";

const SurveyQuestionsTest = () => {
  let userData = {};
  const setUserData = (data) => (userData = data);

  let profileData = {};
  const setProfileData = (data) => (profileData = data);

  let recomendedCity = {};
  const setRecomendedCity = (data) => (recomendedCity = data);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <RecomendedContext.Provider value={{ recomendedCity, setRecomendedCity }}>
        <ProfileContext.Provider value={{ profileData, setProfileData }}>
            <SurveyQuestions />
        </ProfileContext.Provider>
      </RecomendedContext.Provider>
    </UserContext.Provider>
  );
};

it("It renders without crashing", () => {
  expect(SurveyQuestionsTest).toBeDefined();
});
