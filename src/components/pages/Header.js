import React from "react";
import SearchBar from '../subComponents/SearchBar';
import styled from 'styled-components';

const Div = styled.div`
width: 100%;
background: #2196F3;
display: flex;
flex-direction: column;
height: 370px;
margin: 0 0 10px 0;
align-items: center;
@media screen and (max-width: 600px){
  margin: 0;
  height: 326px; 
}
`
const Heading = styled.p`
display: flex;
align-items: baseline;
font-size: 24px;
font-weight: 400;
color: white;
font-family: Oswald;
padding-top: 20px;
@media screen and (max-width: 600px){
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
}
`
const LargeText = styled.span`
display: inline-block;
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

const Header = () => {
  return (
    <Div>
      <Heading>FIND THE PERFECT <LargeText> CITY </LargeText> TO CALL <LargeText> HOME </LargeText></Heading>
      <SearchBar/>
    </Div>
  );
};
export default Header;
