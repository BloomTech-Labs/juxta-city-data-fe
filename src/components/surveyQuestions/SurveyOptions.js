import React from 'react';

import { Label, RadioInput } from './styles/surveyOptionsStyles';

const SurveyOptions = (props) => {
  function handleUpdateState(event) {
    props.updateState(event.target.name, event.target.value);
  }

  return (
    <Label data-testid="option-label">
      <RadioInput
       data-testid="radio-input-option"
        type='radio'
        name={props.name}
        value={props.value}
        checked={props.formState[`${props.name}`] === props.value}
        onChange={handleUpdateState}
      />
      {props.description}
    </Label>
  );
};

export default SurveyOptions;
