import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/newlogo.png';
import { Container } from '@material-ui/core';

const SurveyCard = styled.div`
  width: 65rem;
  padding: 3rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.3);

  img {
    width: 20rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }

  button {
    background: #0074cc;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem 3rem;
  }

  @media (max-width: 500px) {
    width: 30rem;
  }
`;

const SurveyBox = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/survey');
  }

  return (
    <Container
      maxWidth='lg'
      style={{
        minHeight: '69.2vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <SurveyCard>
        <img src={Logo} alt='citylogo' />
        <h2>Introducing City Match Maker!</h2>
        <p>
          Get recomendations by answering a few questions and find a new place
          to call home!
        </p>
        <button onClick={handleClick}>Take the survey &rarr;</button>
      </SurveyCard>
    </Container>
  );
};

export default SurveyBox;
