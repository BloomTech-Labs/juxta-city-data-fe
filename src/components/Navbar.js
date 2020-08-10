import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/logo.png";
import LogoWhite from "../assets/logo-white.png";
import UserContext from "../contexts/UserContext";
import { makeStyles } from "@material-ui/core/styles";
import poly from "../assets/polydown.png";
import polyWhite from "../assets/polyWhite.png";
import avatar from "../assets/avatar.png";
import ProfileContext from "../contexts/ProfileContext";
import { Button } from "semantic-ui-react";
import ModalSignIn from "./auth/ModalSignIn";

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
  @media (max-width: 500px) {
    margin: auto 0;
  }
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
  max-height: 80px;
  z-index: 2;
  position: ${({ pathname }) =>
    !pathname.includes("/cityview") ? "relative" : "sticky; top: 0"};
  max-width: 1280px;
  background: ${({ pathname }) =>
    pathname.includes("/cityview")
      ? "#2196F3"
      : pathname.includes("/recommended")
      ? "#2196F3"
      : pathname.includes("/profile")
      ? "#3BE1CD"
      : null};
`;
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 130,
    height: 170,
    zIndex: 3,
    marginTop: 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 4,
    [theme.breakpoints.down("sm")]: {
      right: 16,
    },
  },
  avatarBox: {
    display: "flex",
    alignItems: "center",
  },
  modalLi: {
    padding: "7px 0",
    textDecoration: "none",
    listStyleType: "none",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    "&:hover": {
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
  darken: {
    position: "absolute",
    zIndex: 2,
    border: "1px solid red",
    width: `100vh`,
    height: `100vh`,
    background: "rgba(0,0,0,0.5)",
    top: 80,
    transition: "ease-in-out 2s",
    [theme.breakpoints.down("sm")]: {
      top: 80,
    },
  },
  animation: {
    transition: "ease-in .2s",
    width: 15,
    height: 10,
    "&:hover": {
      cursor: "pointer",
    },
  },
  animation2: {
    transition: "ease-in .2s",
    transform: "rotate(180deg)",
    width: 15,
    height: 10,
    "&:hover": {
      cursor: "pointer",
    },
  },
  SignInBlue: {
    border: "0",
    background: "none",
    fontSize: 16,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      background: "#687FAD",
      color: "white",
      fontSize: 16,
      border: "0",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  SignInWhite: {
    border: "0",
    background: "none",
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      background: "#687FAD",
      color: "white",
      fontSize: 16,
      border: "0",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const NavBar = ({ auth, history, location, props }) => {
  const classes = useStyles();
  const { setUserData } = useContext(UserContext);
  const { setProfileData } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);
  
  const [modalOpen, setModalSatae] = useState(false);

  const handleOpenModal = () => setModalSatae(true);
  const handleCloseModal = () => setModalSatae(false);
  
  // const login = () => {
  //   history.push("/signin");
  // };
  const handleDash = () => {
    handleOpen();
    history.push("/dashboard");
  };
  const handleOpen = () => {
    let background = document.getElementById("darken");
    if (open) {
      background.style.display = "none";
    } else {
      background.style.display = "block";
    }
    setOpen(!open);
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
    <div className={classes.paper}>
      <ul className={classes.modalLi}>
        <li className={classes.modalLi}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={classes.modalLi} onClick={handleAbout}>
          About
        </li>
        <li className={classes.modalLi} onClick={handleDash}>
          Dashboard
        </li>
        <li className={classes.modalLi} onClick={logout}>
          Logout
        </li>
      </ul>
    </div>
  );

  let token = localStorage.getItem("token");
  return (
    <NavDiv pathname={location.pathname}>
      <H2>
        <Link className="link" to="/">
          <img
            src={
              location.pathname === "/cityview"
                ? LogoWhite
                : location.pathname === "/recommended"
                ? LogoWhite
                : Logo
            }
            alt="Find Ur City Logo"
          />
        </Link>
      </H2>
      {token ? (
        <UL>
          <Li className={classes.avatarBox}>
            <img src={avatar} alt="avatar" />
            <button className="link" onClick={handleOpen}>
              <img
                id="dropdown"
                className={!open ? classes.animation : classes.animation2}
                src={
                  location.pathname === "/cityview"
                    ? polyWhite
                    : location.pathname === "/recommended"
                    ? polyWhite
                    : location.pathname === "/profile"
                    ? polyWhite
                    : poly
                }
                alt="navigation arrow here"
              />
            </button>

            {open ? body : <span></span>}
          </Li>
        </UL>
      ) : (
        <UL>
          <Li>
            {/* <button
              className={
                location.pathname === "/cityview"
                  ? classes.SignInBlue
                  : location.pathname === "/recommended"
                  ? classes.SignInBlue
                  : classes.SignInWhite
              }
              onClick={login}
            >
              Sign In
            </button> */}

            <Button onClick={handleOpenModal}>Sign In</Button>
            <ModalSignIn modalOpen={modalOpen} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} history={history}/> 
          </Li>
        </UL>
      )}
    </NavDiv>
  );
};

export default NavBar;
