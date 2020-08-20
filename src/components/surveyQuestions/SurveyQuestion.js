import React from 'react';
import SurveyOptions from './SurveyOptions';
import SimpleModal from './simpleModal/SimpleModal';
import {
  Container,
  Question,
  SurveyOptionsSection,
} from './styles/surveyQuestionStyles';

const SurveyQuestion = ({item, formState, updateState}) => {
  return (
    <Container>
      <Question data-testid="question" style={{display:'flex', flexDirection:'row'}}>
        {item.question}{' '}
        {item.question ===
          `What is an acceptable cost of living index for your new city?` && (
          <SimpleModal />
        )}
      </Question>
      <SurveyOptionsSection data-testid="options-list">
        {item.options.map((option, index) => (
          <SurveyOptions
            key={index}
            name={item.name}
            value={option.value}
            formState={formState}
            updateState={updateState}
            description={option.description}
          />
        ))}
      </SurveyOptionsSection>
    </Container>
  );
};

export default SurveyQuestion;
