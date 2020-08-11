import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

const SurveyCard = styled.div`
  width: 50rem;
  height: 20rem;
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.3);

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  button {
    background: #0091ff;
    border: none;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.6rem 1.3rem;
  }
`;

const SurveyBox = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/survey');
  }

  return (
    <Container
      maxWidth='xl'
      style={{
        minHeight: '69.2vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <SurveyCard>
        <h2>Take Our Survey</h2>
        <p>Instantly receive recommendations by taking our survey</p>
        <button onClick={handleClick}>Survey</button>
      </SurveyCard>
    </Container>
  );
};

export default SurveyBox;
