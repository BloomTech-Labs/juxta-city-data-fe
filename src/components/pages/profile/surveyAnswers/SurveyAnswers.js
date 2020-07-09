import React from "react";
import AnswerSurvey from "./AnswerSurvey";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const SurveyAnswers = ({ surveyData, profileData }) => {
  const history = useHistory();

  function handleClick() {
    history.push("/survey");
  }

  return  profileData && profileData.map((info, index) => {
    if (info.surveyinfo !== null) {
      return (
        <div key={index}>
          <AnswerSurvey info={info} surveyData={surveyData} />
          <Button onClick={handleClick} variant="outlined" color="primary" alt="Retake the survey button">
            Retake the survey
          </Button>
        </div>
      );
    } else {
      return (
        <div key={index}>
          Please complete survey!
          <Button onClick={handleClick} variant="outlined" color="primary" alt="Take the survey button">
            Take the survey
          </Button>
        </div>
      );
    }
  });
};
export default SurveyAnswers;
