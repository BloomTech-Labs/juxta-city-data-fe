import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

import styled from "styled-components";
import ContentBody from "./ContentBody";

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

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/dashboard");
    };

    logout = async () => {
      this.props.auth.logout("/");
    };

    render() {
      if (this.state.authenticated === null) return null;

      const Access = this.state.authenticated ? (
        <NavDiv>
          <H2>
            <Link className="link" to="/">
              findur
            </Link>
          </H2>
          <UL>
            <Li>
              <Link className="link" onClick={this.logout}>
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
              <Link className="link" onClick={this.login}>
                sign in
              </Link>
            </Li>
            <Li>
              <Link className="link" to="/new-user">
                sign up
              </Link>
            </Li>
          </UL>
        </NavDiv>
      );

      return (
        <div>
          <section>{Access}</section>
          <ContentBody />
        </div>
      );
    }
  }
);
