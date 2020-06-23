import React, { useState } from "react";
import axios from "axios";
import { styles } from "./authStlyes";

export default function SignUp(props) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const classes = styles();

  const signUpChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://production-juxta-city-be.herokuapp.com/api/auth/signup",
        form
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch((err) => {
        document.getElementById("error-message").style.display = "block";
      });
  };
  return (
    <div className={classes.box} style={{ background: "#2196F3" }}>
      <h3 className={classes.h3}>Sign Up</h3>
      <form onSubmit={handleSubmit} className={classes.form}>
        <p id="error-message" style={{ display: "none", color: "red" }}>
          **Sorry the username and email must be unique**
        </p>
        <input
          className={classes.inputs}
          type="text"
          id="username"
          name="username"
          placeholder="Username (required)"
          value={form.username}
          onChange={signUpChange}
          required
        />
        <input
          className={classes.inputs}
          type="email"
          id="email"
          name="email"
          placeholder="Email (required)"
          value={form.email}
          onChange={signUpChange}
          required
        />
        <input
          className={classes.inputs}
          type="password"
          id="password"
          name="password"
          placeholder="Password (required)"
          value={form.password}
          onChange={signUpChange}
          required
        />
        <button className={classes.submit} style={{ background: "#8BC34A" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
