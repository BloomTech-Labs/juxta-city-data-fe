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

const Li = styled.li`
  margin: 0 15px;
  text-transform: capitalize;
`;

const Navbar = () => {
  return (
    <NavDiv>
      <H2>
        <Link className="link" to="/">
          findur
        </Link>
      </H2>
      <UL>
        <Li>
          <Link className="link" to="/signin">
            sign in
          </Link>
        </Li>
        <Li>
          <Link className="link" to="/">
            sign up
          </Link>
        </Li>
        <Li>
          <Link className="link" to="/dashboard">
            dashboard
          </Link>
        </Li>
      </UL>
    </NavDiv>
  );
};
export default Navbar;
