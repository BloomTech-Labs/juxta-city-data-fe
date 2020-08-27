import React from 'react';
import AnswerSurvey from './AnswerSurvey';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';

const SurveyAnswers = ({ surveyData, profileData }) => {
  const history = useHistory();
//  console.log(surveyData,"survey surveyData")
  return (
    profileData && profileData.map((info, index) => {
      if (info.surveyinfo !== null) {
        // console.log(info.surveyinfo,"survey info")
        return (
          <Card key={index}>
            <Card.Content>
              <Card.Header>Your Survey Answers</Card.Header>
            </Card.Content>
            <Card.Content>
              <AnswerSurvey info={info} surveyData={surveyData} />
              <Button onClick={() => history.push('/survey')}
                alt='retake the survey button' style={{ backgroundColor: '#0074cc', color: 'white', marginTop:'10px'}}
              > Retake the survey</Button>
            </Card.Content>
          </Card>
        );
      } else {
        return <span></span>;
      }
    })
  );
};
export default SurveyAnswers;
