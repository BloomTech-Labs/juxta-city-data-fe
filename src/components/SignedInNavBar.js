import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";

const SignedInNavBar = () => {
  const NavDiv = styled.div`
    display: flex;
    justify-content: flex-start;
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

  return (
    <NavDiv>
      <H2>
        <Link className="link">findur</Link>
      </H2>
      <UL>
        <Li>
          <Link className="link" to={"/"}>
            sign out
          </Link>
        </Li>
      </UL>
    </NavDiv>
  );
};
export default SignedInNavBar;
