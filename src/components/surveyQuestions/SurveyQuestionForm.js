import React from 'react';
import SurveyQuestion from './SurveyQuestion';
import { SubmitButton, Form } from './styles/surveyQuestionsStyles';

const SurveyQuestionForm =(props)=>{
    return (
        <Form onSubmit={props.handleSubmit}>
        {props.surveyData.map((item, index) => (
          <SurveyQuestion key={index} item={item}
          updateState={props.updateState} formState={props.formState}/>
        ))}
        <SubmitButton type='submit'>Continue</SubmitButton>
      </Form>
    )
}
export default SurveyQuestionForm;