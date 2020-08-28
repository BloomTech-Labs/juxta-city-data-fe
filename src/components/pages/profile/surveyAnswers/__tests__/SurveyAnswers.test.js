import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import SurveyAnswers from '../SurveyAnswers';
import SurveyAnswersBox from '../SurveyAnswersBox';
import ProfileContext from '../../../../../contexts/ProfileContext';
import { getSurveyData } from '../../../../surveyQuestions/SurveyFunctions';
import axios from 'axios';

jest.mock('axios');

afterEach(cleanup);
it("should render the 'retake survey button' when surveuinfo is not null", async () => {
  let profileData = [
    {
      surveyinfo: {
        state: 'None',
        population: '4',
        population_change: '0',
        median_age: '4',
        house_cost: '0',
      },
    },
  ];
  const surveyQues = [
    {
      id: 1,
      question: 'What is an acceptable cost of living index for your new city?',
      name: 'cost_of_living',
      options: [
        { id: 1, description: 'Very low 75', value: '1' },
        { id: 2, description: 'Low 76 - 99', value: '2' },
        { id: 3, description: 'Medium 100 - 110', value: '3' },
        { id: 4, description: 'High 111 - 149', value: '4' },
        { id: 5, description: 'Very high 150+', value: '5' },
      ],
    },
    {
      id: 2,
      question: 'What is your age group?',
      name: 'median_age',
      options: [
        { id: 6, description: '17 and younger', value: '1' },
        { id: 7, description: '18 - 29', value: '2' },
        { id: 8, description: '30 - 46', value: '3' },
        { id: 9, description: '47 - 65', value: '4' },
        { id: 10, description: '66+', value: '5' },
      ],
    },
  ];

  const setProfileData = data => (profileData = data);
  
axios.get.mockResolvedValue({ data: surveyQues });
const surveyData = await getSurveyData();
  const { getByText } = render(
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      <Router>
        <SurveyAnswersBox>
          <SurveyAnswers surveyData={surveyData} profileData={profileData}/>
        </SurveyAnswersBox>
      </Router>
    </ProfileContext.Provider>
  );
  const retakeSurveyBtn = getByText(/Retake the survey/i);
  expect(retakeSurveyBtn).toBeInTheDocument();
});

it("should  NOT render the 'retake survey button' when surveuinfo is null", async () => {
  let profileData = [];
  const surveyQues = [];

  const setProfileData = data => (profileData = data);
  
axios.get.mockResolvedValue({ data: surveyQues });
const surveyData = await getSurveyData();
  const  comp = render(
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      <Router>
        <SurveyAnswersBox>
          <SurveyAnswers surveyData={surveyData} profileData={profileData}/>
        </SurveyAnswersBox>
      </Router>
    </ProfileContext.Provider>
  );
  expect(comp.queryByText(/Retake the survey/i)).not.toBeInTheDocument();
});
