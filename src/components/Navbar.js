import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";

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

const NavBar = (props) => {
  const login = () => {
    props.auth.login("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("okta-token-storage")
    localStorage.removeItem("okta-pkce-storage")
    props.history.push('/')
  };
  let token = localStorage.getItem("okta-token-storage");
  return (
     token ? (
      <NavDiv>
        <H2>
          <Link className="link" to="/">
            findur
          </Link>
        </H2>
        <UL>
          <Li>
            <Link className="link" onClick={logout}>
              sign out
            </Link>
          </Li>
        </UL>
      </NavDiv>
    ) : (
      <NavDiv>
        <H2>
          <Link className="link" to="/">
            findur
          </Link>
        </H2>
        <UL>
          <Li>
            <Link className="link" onClick={login} >
              sign in / sign up
            </Link>
          </Li>
        </UL>
      </NavDiv>
    )
  );
};
export default NavBar;
