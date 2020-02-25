import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";

const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const UL = styled.ul`
  width: 60%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const H2 = styled.h2`
  width: 40%;
  justify-content: flex-start;
`;

const Navbar = () => {
  return (
    <NavDiv>
      <H2>findur</H2>
      <UL>
        <li>
          <Link to="/">sign in</Link>
        </li>
        <li>
          <Link to="/">sign up</Link>
        </li>
      </UL>
    </NavDiv>
  );
};
export default Navbar;
