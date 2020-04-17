import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import NavBar from '../Navbar.js';
import SurveyQuestion from './SurveyQuestion';
import surveyData from './data/surveyData';
import { Heading, SubmitButton, Form } from './styles/surveyQuestionsStyles';

const SurveyQuestions = (props) => {
  const [formState, setFormState] = useState({
    col: '0',
    age: '0',
    pop: '0',
    cmt: '0',
  });

  function updateState(name, val) {
    setFormState({ ...formState, [name]: val });
  }

  function handleSubmit(event) {
    event.preventDefault();
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
