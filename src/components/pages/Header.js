import React from "react";
import SearchBar from '../subComponents/SearchBar';
import styled from 'styled-components';

const Div = styled.div`
width: 100%;
background: lightgrey;
display: flex;
flex-direction: column;
height: 300px;
margin: 10px 0;
align-items: center
`
const Heading = styled.h1`
font-size: 40px;
font-weight: 400;
`

const Header = () => {
  return (
    <Div>
      <Heading>FIND THE PERFECT CITY TO CALL HOME</Heading>
      <SearchBar/>
    </Div>
  );
};
export default Header;
