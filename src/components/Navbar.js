import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/logo.png";
import poly from "../assets/polydown.png";
import profiledefault from '../assets/default.png';
import UserContext from "../contexts/UserContext";
import ProfileContext from "../contexts/ProfileContext";
import ModalSignIn from "./auth/ModalSignIn";
import ModalContext from "../contexts/ModalContext";

const UL = styled.ul`
  width: 65%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Li = styled.li`
  width: 15%;
  text-decoration: none;
  max-padding: 0 20px;
  margin: 0 15px;
  font-weight: 600;
  text-transform: capitalize;
`;

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  max-height: 80px;
  z-index: 2;
  position: ${({ pathname }) =>
    !pathname.includes("/cityview") ? "relative" : "sticky; top: 0"};
  width: 100%;
  background: #f2f2f2;
`;

const NavBar = ({ history, location }) => {
  const { setUserData } = useContext(UserContext);
  const { setProfileData } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);

  const { modal, setModal } = useContext(ModalContext);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDash = () => {
    handleOpen();
    history.push("/dashboard");
  };

  const handleAbout = () => {
    history.push("/");
    handleOpen();

    setTimeout(() => {
      const ele = document.getElementById("about");
      if (ele) {
        const offset = ele.offsetTop;
        window.scrollTo(0, offset);
      }
    }, 200);
  };

  const logout = () => {
    handleOpen();
    localStorage.clear();
    setUserData({});
    setProfileData({});
    history.push("/");
  };

  const body = (
    <div className="nav-menu">
      <Menu pointing vertical style={{ position: "absolute", width: "140px" }}>
        <Menu.Item>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/survey">Survey</Link>
        </Menu.Item>
        <Menu.Item onClick={handleAbout}> About</Menu.Item>
        <Menu.Item onClick={handleDash}> Dashboard</Menu.Item>
        <Menu.Item onClick={logout}> Logout</Menu.Item>
      </Menu>
    </div>
  );

  let token = localStorage.getItem("token");
  let profileImage = localStorage.getItem("profilePicture");

  return (
    <NavDiv pathname={location.pathname}>
      <Link className="link" to="/">
        <img
          style={{ width: "170px", height: "65px", paddingTop: "10px", paddingLeft: "20px" }}
          src={Logo}
          alt="Find Ur City Logo"
        />
      </Link>
      {token ? (
        <UL>
          <Li>
            <img
              src={
                !((profileImage === "null") | (profileImage === null))
                  ? profileImage
                  : profiledefault
              }
              alt="profile avatar"
              onClick={handleOpen}
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
              }}
            />
            <button className="link" onClick={handleOpen}>
              <img
                id="dropdown"
                src={poly}
                alt="navigation arrow here"
              />
            </button>
            {open ? body : <span></span>}
          </Li>
        </UL>
      ) : (
          <UL>
            <Li>
              <Button onClick={() => setModal(true)}>Sign In</Button>
              <ModalSignIn modal={modal} setModal={setModal} history={history} />
            </Li>
          </UL>
        )}
    </NavDiv>
  );
};

export default NavBar;

