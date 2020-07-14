import React, { useState, useContext, useEffect } from "react";
import RecomendedContext from "../../contexts/RecomendedContext";
import ProfileContext from "../../contexts/ProfileContext";
import { useHistory } from "react-router-dom";
import { getRecomendedCities } from "../../functions/index";
import { getSurveyData, putSurveyAnswers } from "./SurveyFunctions";
import SurveyQuestionsBox from "./SurveyQuestionsBox";

const initialState = {
  state: "None",
  population: "0",
  population_change: "0",
  median_age: "0",
  house_cost: "0",
  rental_cost: "0",
  population_density: "0",
  cost_of_living: "0",
  average_commute: "0",
  air_quality: "0",
};

const SurveyQuestions = (props) => {
  const [surveyData, setSurveyData] = useState([]);
  const [formState, setFormState] = useState(initialState);

  const { setRecomendedCity } = useContext(RecomendedContext);
  const { profileData } = useContext(ProfileContext);

  const history = useHistory();

  function updateState(name, val) {setFormState({ ...formState, [name]: val })};

   function getRecomended (){
    getRecomendedCities(formState).then((cities) => setRecomendedCity(cities))
    .then(() => history.push("/recommended")).catch((err) => console.log(err))};

  function handleNoAuthSubmit(event) {
    event.preventDefault();
    getRecomended()};

  function handleSurveySubmit(event) {
    const profileId = profileData[0].id;
    event.preventDefault();
    putSurveyAnswers(formState, profileId);
    getRecomended()};

  useEffect(() => {
    getSurveyData().then((response) => setSurveyData(response))}, []);

  return (
    <SurveyQuestionsBox props={props} profileData={profileData } handleNoAuthSubmit={handleNoAuthSubmit} 
      handleSurveySubmit={handleSurveySubmit}  surveyData={surveyData}
      updateState={updateState} formState={formState}/>
  );
};

export default SurveyQuestions;
