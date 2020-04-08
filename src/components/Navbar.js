import React, {useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from '../assets/logo.png'
import LogoWhite from '../assets/logo-white.png'
import UserContext from '../contexts/UserContext'

  
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
const NavDiv = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  position: ${ ({ pathname }) => !pathname.includes('/cityview') ? 'relative' : 'sticky; top: 0'};
  max-width: 1280px;
  background: ${ ({ pathname }) => !pathname.includes('/cityview') ? 'white': '#2196F3'};
`;

const NavBar = ({ auth, history, location }) => {

  const {userData, setUserData} = useContext(UserContext)
  const login = () => {
    auth.login("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("okta-token-storage")
    localStorage.removeItem("okta-cache-storage")
    localStorage.removeItem("cityName")
    localStorage.removeItem("userId")
    localStorage.removeItem("okta-pkce-storage")
    setUserData({})
    history.push('/')
  };
  let token = localStorage.getItem("okta-token-storage");
  return (
     token ? (
      <NavDiv pathname={location.pathname}>
        <H2>
          <Link className="link" to="/">
            <img
              src={location.pathname !== '/cityview' ? Logo : LogoWhite}
              alt='Find Ur City Logo'
            />
          </Link>
        </H2>
        <UL>
          <Li>
            <button className="link" onClick={logout}>
              Sign Out
            </button>
          </Li>
        </UL>
      </NavDiv>
    ) : (
      <NavDiv pathname={location.pathname}>
        <H2>
          <Link className="link" to="/">
          <img
            src={location.pathname !== '/cityview' ? Logo : LogoWhite}
            alt='Find Ur City Logo'
          />
          </Link>
        </H2>
        <UL>
          <Li>
            <button className="link" onClick={login} >
              Sign In / Sign Up
            </button>
          </Li>
        </UL>
      </NavDiv>
    )
  );
};

export default NavBar;
