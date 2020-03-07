import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from '../assets/logo.png'

  const NavDiv = styled.div`
    display: flex;
    height: 80px;
  `;
  const UL = styled.ul`
    width: 65%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
  `;

  const H2 = styled.h2`
    width: 25%;
    margin-left: 50px;
    justify-content: flex-start;
    padding-right: 30px;
  `;

  const Li = styled.li`
    width: 18%;
    text-decoration: none;
    max-padding: 0 20px;
    margin: 0 15px;
    font-weight: 600;
    text-transform: capitalize;
  `;

const NavBar = (props) => {
  
  console.log(props.auth)
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
            <img src={Logo}/>
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
          <img src={Logo}/>
          </Link>
        </H2>
        <UL>
          <Li>
            <Link className="link" to='/about'>
            About
            </Link>
          </Li>
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
