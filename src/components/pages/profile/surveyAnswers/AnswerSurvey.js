import React from "react";
import { List } from 'semantic-ui-react'

const AnswerSurvey = ({ info, index, surveyData }) => {
  
  return (
    <div key={index}>
      {surveyData.map((item) => {
        return (
          <List  key={item.id} data-testid="List-of-answers" >
            <List.Item>
              <List.Header>{item.question} </List.Header>
            </List.Item>
            {item.options.map((opt) => {
              if (info.surveyinfo[item.name] === opt.value) {
                return (
                  <List.Item key={opt.id}>
                    <List.Description >{opt.description}</List.Description>
                  </List.Item>
                );
              } else {
                return null;
              }
            })}
          </List>
        );
      })}
    </div>
  );
};
export default AnswerSurvey;
