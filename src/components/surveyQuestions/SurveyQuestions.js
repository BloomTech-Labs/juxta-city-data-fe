import React, { useState, useContext } from 'react';
import RecomendedContext from '../../contexts/RecomendedContext';
import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';

import NavBar from '../Navbar.js';
import SurveyQuestion from './SurveyQuestion';

import { getRecomendedCities } from '../../functions/index';
import surveyData from './data/surveyData';
import { Heading, SubmitButton, Form } from './styles/surveyQuestionsStyles';

const SurveyQuestions = (props) => {
  const [formState, setFormState] = useState({
    state: 'None',
    population: '0',
    population_change: '0',
    median_age: '0',
    house_cost: '0',
    rental_cost: '0',
    population_density: '0',
    cost_of_living: '0',
    average_commute: '0',
    air_quality: '0',
  });
  const { setRecomendedCity } = useContext(RecomendedContext);
  const history = useHistory();

  function updateState(name, val) {
    setFormState({ ...formState, [name]: val });
  }

  function handleSubmit(event) {
    event.preventDefault();
    getRecomendedCities(formState)
      .then((cities) => setRecomendedCity(cities))
      .then(() => history.push('/recommended'));
  }

  return (
    <Container>
      <NavBar {...props} />
      <Heading>Answer a few questions to get a city recomendation</Heading>
      <Form onSubmit={handleSubmit}>
        {surveyData.map((item, index) => (
          <SurveyQuestion
            key={index}
            name={item.name}
            question={item.question}
            options={item.options}
            updateState={updateState}
            formState={formState}
          />
        ))}
        <SubmitButton type='submit'>Continue</SubmitButton>
      </Form>
    </Container>
  );
};

export default SurveyQuestions;
