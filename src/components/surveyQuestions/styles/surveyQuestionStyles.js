import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 60px;
`;

export const Question = styled.h2`
  color: #212121;
  margin-bottom: 17px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
    font-size: 16px;
  }
`;

export const SurveyOptionsSection = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
