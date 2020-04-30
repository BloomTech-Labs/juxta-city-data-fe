import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { styles } from "./authStlyes";
import logo from "../../assets/logo.png";

export default function Authentication(props) {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Link to="/">
          <img src={logo} alt="findur logo" />
        </Link>
      </div>
      <SignUp {...props} />
      <SignIn {...props} />
    </div>
  );
}
