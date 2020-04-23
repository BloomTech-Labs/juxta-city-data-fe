import React from 'react';

import SurveyOptions from './SurveyOptions';
import SimpleModal from './simpleModal/SimpleModal';

import {
  Container,
  Question,
  SurveyOptionsSection,
} from './styles/surveyQuestionStyles';

const SurveyQuestion = (props) => {
  return (
    <Container>
      <Question>
        {props.question}{' '}
        {props.question ===
          `What is an acceptable cost of living index for your new city?` && (
          <SimpleModal />
        )}
      </Question>
      <SurveyOptionsSection>
        {props.options.map((option, index) => (
          <SurveyOptions
            key={index}
            name={props.name}
            value={option.value}
            formState={props.formState}
            updateState={props.updateState}
            description={option.description}
          />
        ))}
      </SurveyOptionsSection>
    </Container>
  );
};

export default SurveyQuestion;
