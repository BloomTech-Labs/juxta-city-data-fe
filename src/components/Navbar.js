import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";
import "../../src/index.scss"
import Logo from "../assets/logo.png";
import LogoWhite from "../assets/logo-white.png";
import UserContext from "../contexts/UserContext";
import { makeStyles } from "@material-ui/core/styles";
import poly from "../assets/polydown.png";
import polyWhite from "../assets/polyWhite.png";
import avatar from "../assets/avatar.png";
import ProfileContext from "../contexts/ProfileContext";

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
  z-index: 1;
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
      background: "#2FF029",
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
      background: "#2FF029",
      color: "white",
      fontSize: 16,
      border: "0",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const NavBar = ({ auth, history, location }) => {
  const classes = useStyles();
  const { setUserData } = useContext(UserContext);
  const { setProfileData } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);

  const login = () => {
    history.push("/signin");
  };
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
    <NavDiv  pathname={location.pathname}>
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
        <div className="finderNav">
        <UL >
          <Li className={classes.avatarBox}>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
            {/*<button className="link" onClick={handleOpen}>*/}
            <div>
              <button class="button" type="button" onClick={handleOpen}>
                <span class="print print--under">
                  <svg viewBox="0 0 98 109" xmlns="http://www.w3.org/2000/svg">
                    <path d="m95.42 60.221c0.33333-4.6667 0.33333-10.667 0-18-0.5-11-8.5-26.5-24-34.5-15.5-8-38-9.5-55.5 8-11.667 11.667-16 25.5-13 41.5l0.65525 4.3683c0.38693 2.5791 2.7914 4.3563 5.3705 3.9695 2.5664-0.38496 4.3413-2.7687 3.9742-5.3378-1-7-6-22 10-38 14.554-14.554 38.15-14.554 52.704 0 4.5444 4.5444 7.8364 10.187 9.5562 16.379 0.5744 2.0681 0.98766 3.9417 1.2398 5.6209 2.4899 16.582-2.9979 37.051-6 53" pathLength="1" />
                    <path d="m15.42 76.221c5.3333-3.6667 7.3333-10.167 6-19.5-0.23862-1.551-0.44877-3.0902-0.63044-4.6174-1.8313-15.395 9.1641-29.359 24.559-31.191 1.268-0.15084 2.5448-0.21497 3.8216-0.19197 15.616 0.28138 28.07 13.129 27.864 28.747-0.089675 6.8105-0.29443 11.895-0.61426 15.253-1.2042 12.644-2.9364 21.532-7 37" pathLength="1" />
                    <path d="m19.92 85.221c7-5.3333 10.5-13.333 10.5-24v-12.5c0-10.217 8.2827-18.5 18.5-18.5 10.287 0 18.636 8.3235 18.666 18.611 0.019372 6.5699-0.035925 10.7-0.16589 12.389-1.5 19.5-3.5 31.5-12 45" pathLength="1" />
                    <path d="m26.92 92.221c8.6667-9.3333 13-17.333 13-24 0-4.1832-0.18166-10.365-0.54497-18.544-0.2219-4.9954 3.6478-9.2249 8.6432-9.4467 0.13383-0.0059444 0.26778-0.0089177 0.40175-0.0089177 5.5235 0 10.044 4.395 10.2 9.9163 0.16256 5.764-0.070756 11.792-0.69994 18.084-1.5 15-5.5 25.5-16.5 38" pathLength="1" />
                    <path d="m32.92 99.221c10.667-12.333 16-23.333 16-33v-17" pathLength="1" />
                  </svg>
                </span>
                <span class="print print--over">
                  <svg viewBox="0 0 98 109" xmlns="http://www.w3.org/2000/svg">
                    <path d="m95.42 60.221c0.33333-4.6667 0.33333-10.667 0-18-0.5-11-8.5-26.5-24-34.5-15.5-8-38-9.5-55.5 8-11.667 11.667-16 25.5-13 41.5l0.65525 4.3683c0.38693 2.5791 2.7914 4.3563 5.3705 3.9695 2.5664-0.38496 4.3413-2.7687 3.9742-5.3378-1-7-6-22 10-38 14.554-14.554 38.15-14.554 52.704 0 4.5444 4.5444 7.8364 10.187 9.5562 16.379 0.5744 2.0681 0.98766 3.9417 1.2398 5.6209 2.4899 16.582-2.9979 37.051-6 53" pathLength="1" />
                    <path d="m15.42 76.221c5.3333-3.6667 7.3333-10.167 6-19.5-0.23862-1.551-0.44877-3.0902-0.63044-4.6174-1.8313-15.395 9.1641-29.359 24.559-31.191 1.268-0.15084 2.5448-0.21497 3.8216-0.19197 15.616 0.28138 28.07 13.129 27.864 28.747-0.089675 6.8105-0.29443 11.895-0.61426 15.253-1.2042 12.644-2.9364 21.532-7 37" pathLength="1" />
                    <path d="m19.92 85.221c7-5.3333 10.5-13.333 10.5-24v-12.5c0-10.217 8.2827-18.5 18.5-18.5 10.287 0 18.636 8.3235 18.666 18.611 0.019372 6.5699-0.035925 10.7-0.16589 12.389-1.5 19.5-3.5 31.5-12 45" pathLength="1" />
                    <path d="m26.92 92.221c8.6667-9.3333 13-17.333 13-24 0-4.1832-0.18166-10.365-0.54497-18.544-0.2219-4.9954 3.6478-9.2249 8.6432-9.4467 0.13383-0.0059444 0.26778-0.0089177 0.40175-0.0089177 5.5235 0 10.044 4.395 10.2 9.9163 0.16256 5.764-0.070756 11.792-0.69994 18.084-1.5 15-5.5 25.5-16.5 38" pathLength="1" />
                    <path d="m32.92 99.221c10.667-12.333 16-23.333 16-33v-17" pathLength="1" />
                  </svg>
                </span>
              </button>
            </div>

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
            {/*</button>*/}

            {open ? body : <span></span>}
          </Li>
        </UL>
        </div>
      ) : (
          <UL>
            <Li>
            <button
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
            </button>
           
          </Li>
        </UL>
      )}
    </NavDiv>
  );
};

export default NavBar;
