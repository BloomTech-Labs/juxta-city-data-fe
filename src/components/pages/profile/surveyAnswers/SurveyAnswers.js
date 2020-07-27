import React from "react";
import AnswerSurvey from "./AnswerSurvey";
import { useHistory } from "react-router-dom";
//import Button from "@material-ui/core/Button";
import "../../../css/neumorphism.css"

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
          <button onClick={handleClick} className="btn btn-sm btn-primary" alt="Retake the survey button">
            Retake the survey
          </button>
        </div>
      );
    } else {
      return (
        <div key={index}>
          Please complete survey!
          <button onClick={handleClick} className="btn" alt="Take the survey button">
            Take the survey
          </button>
        </div>
      );
    }
  });
};
export default SurveyAnswers;
