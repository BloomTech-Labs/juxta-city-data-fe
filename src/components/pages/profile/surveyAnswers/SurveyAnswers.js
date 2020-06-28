import React from "react";
import AnswerSurvey from "./AnswerSurvey";

const SurveyAnswers = ({ surveyData, profileData }) => {

  return profileData.map((info, index) => {
    if (info.surveyinfo !== null) {
      return <AnswerSurvey info={info} index={index}  surveyData={surveyData}/>;
    } else {
      return (
        <div key={index}>
          Please complete survey!
        </div>
      );
    }
  });
};
export default SurveyAnswers;