import React from "react";
import { Container } from "@material-ui/core";
import { Heading } from "./styles/surveyQuestionsStyles";
import NavBar from "../Navbar.js";
import SurveyQuestionForm from "./SurveyQuestionForm";

const SurveyQuestionsBox = ({
  props,
  profileData,
  updateState,
  formState,
  handleNoAuthSubmit,
  surveyData,
  handleSurveySubmit,
}) => {
  return (
    <Container>
      <NavBar {...props} />
      <Heading>Answer a few questions to get a city recomendation</Heading>
      <SurveyQuestionForm
        handleSubmit={
          !profileData.length ? handleNoAuthSubmit : handleSurveySubmit
        }
        surveyData={surveyData}
        updateState={updateState}
        formState={formState}
      />
    </Container>
  );
};

export default SurveyQuestionsBox;