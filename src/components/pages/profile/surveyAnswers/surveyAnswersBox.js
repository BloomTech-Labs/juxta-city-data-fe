import React, { useContext, useState, useEffect } from 'react';
import ProfileContext from '../../../../contexts/ProfileContext';
import { getSurveyData } from '../../../surveyQuestions/SurveyFunctions';
import SurveyAnswers from './SurveyAnswers';

const SurveyAnswersBox = ({ index }) => {
  const { profileData } = useContext(ProfileContext);
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    getSurveyData().then(response => setSurveyData(response));
  }, []);

  return (
    <SurveyAnswers
      index={index}
      profileData={profileData}
      surveyData={surveyData}
    />
  );
};
export default SurveyAnswersBox;
