import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../subComponents/SearchBar';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  background: #2196f3;
  display: flex;
  flex-direction: column;
  height: 370px;
  margin: 0 0 10px 0;
  align-items: center;
  @media screen and (max-width: 600px) {
    margin: 0;
    height: 326px;
  }
`;
const Heading = styled.h1`
<<<<<<< HEAD
  display: flex;
  align-items: baseline;
  height: 98px;
  font-size: 24px;
  font-weight: 400;
  color: white;
  font-family: Oswald;
  @media screen and (max-width: 600px) {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }
`;
const LargeText = styled.h1`
  font-size: 44px;
  font-weight: 400;
  color: white;
  font-family: Oswald;
  padding: 0 10px;
  @media screen and (max-width: 600px) {
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
  }
`;
const Paragraph = styled.p`
  margin: 72px 0 20px 0;
  font-size: 18px;
  color: #f4f4f4;

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 26px;
  }
`;

const Button = styled.button`
  background: #8bc34a;
  padding: 9px 16px;
  border-radius: 4px;
  color: #ffffff;
  border: none;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`;
=======
display: flex;
align-items: baseline;
height: 98px;
font-size: 24px;
font-weight: 400;
color: white;
font-family: Oswald;
@media screen and (max-width: 600px){
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
}
`
const LargeText = styled.span`
font-size: 44px;
font-weight: 400;
color: white;
font-family: Oswald;
padding: 0 10px;
@media screen and (max-width: 600px){
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
}
`
>>>>>>> 307cdf9a35a81acd42a30ed06cc653122e738760

const Header = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push('/survey');
  }

  return (
    <Div>
      <Heading>
        FIND THE PERFECT <LargeText> CITY </LargeText> TO CALL{' '}
        <LargeText> HOME </LargeText>
      </Heading>
      <SearchBar />
      <Paragraph>Get recomendations by answering a few questions</Paragraph>
      <Button onClick={handleClick}>Discover a Match</Button>
    </Div>
  );
};
export default Header;
