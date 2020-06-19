import React, { useState } from "react";
import axios from "axios";
import { styles } from "./authStlyes";

export default function SignIn(props) {
  const [signInForm, setSignInForm] = useState({});
  const classes = styles();
  const signInChange = (e) => {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://production-juxta-city-be.herokuapp.com/api/auth/signin",
        signInForm
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("signin-error").style.display = "block";
      });
  };
  return (
    <div className={classes.box} style={{ background: "#8BC34A" }}>
      <h3 className={classes.h3} style={{ color: "white" }}>
        Sign In
      </h3>
      <form onSubmit={handleSubmit} className={classes.form}>
        <p id="signin-error" style={{ display: "none", color: "red" }}>
          Sorry User Not Found
        </p>
        <input
          className={classes.inputs}
          type="text"
          id="username2"
          name="username"
          placeholder="Username"
          value={signInForm.username}
          onChange={signInChange}
          required
        />
        <input
          className={classes.inputs}
          type="password"
          id="password2"
          name="password"
          placeholder="Password"
          value={signInForm.password}
          onChange={signInChange}
          required
        />
        <button className={classes.submit} style={{ background: "#2196F3" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
