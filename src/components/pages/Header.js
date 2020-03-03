import React from "react";
import SearchBar from '../subComponents/SearchBar';
import styled from 'styled-components';

const Div = styled.div`
width: 100%;
background: lightgrey;
display: flex;
height: 300px;
margin: 10px;
align-items: center
`

const Header = () => {
  return (
    <Div>
      <SearchBar/>
    </Div>
  );
};
export default Header;
