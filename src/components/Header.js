import React from "react";
import Navbar from "../components/Navbar.js";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Navbar />
    </HeaderDiv>
  );
};
export default Header;
