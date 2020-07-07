import React, { useContext, useState, useEffect } from "react";
import ProfileContext from "../../../../contexts/ProfileContext";
import { getSurveyData } from "../../../surveyQuestions/SurveyFunctions";
import SurveyAnswers from './SurveyAnswers'
import Paper from "@material-ui/core/Paper";
import profileInfoStyle from "../../profileStyles/profileInfoStyle";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const SurveyAnswersBox = () => {
  const classes = profileInfoStyle();
  const { profileData } = useContext(ProfileContext);
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    getSurveyData().then((response) => setSurveyData(response));
  }, []);
  const history = useHistory();

  function handleClick() {
    history.push("/survey");
  }
  
   return (
    <Paper className={classes.paper}>
      <h3>Your Survey Answers</h3>
     <SurveyAnswers profileData={profileData}  surveyData={surveyData} />
     <Button onClick={handleClick } variant="outlined" color="primary" >Retake the survey</Button>
    </Paper>
   )
  
};
export default SurveyAnswersBox;
