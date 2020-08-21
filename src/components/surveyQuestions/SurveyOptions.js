import React from 'react';

import { Fieldset, Legend, Label, RadioInput } from './styles/surveyOptionsStyles';

const SurveyOptions = (props) => {
  function handleUpdateState(event) {
    props.updateState(event.target.name, event.target.value);
  }

  return (
    <Label data-testid="option-label">
      <Fieldset>
        <Legend>{props.name}</Legend>
      <RadioInput
       data-testid="radio-input-option"
        type='radio'
        name={props.name}
        value={props.value}
        checked={props.formState[`${props.name}`] === props.value}
        onChange={handleUpdateState}
        // aria-label={props.name}
      />
      <br></br>
      {props.description}
      </Fieldset>
    </Label>
    
  );
};

export default SurveyOptions;
