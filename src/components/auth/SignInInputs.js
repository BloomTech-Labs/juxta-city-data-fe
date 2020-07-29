import React from "react";
import { styles } from "./authStlyes";

const SignInInputs = ({ signInChange, handleSubmit, signInForm }) => {
  const classes = styles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
        <p id="signin-error" style={{ display: "none", color: "red" }} >
        Sorry User Not Found </p>
        <input className={classes.inputs} type="text" name="username" placeholder="Username"
        value={signInForm.username} onChange={(event)=>signInChange(event)} required
        />
        <input className={classes.inputs} type="password" name="password" placeholder="Password"
        value={signInForm.password} onChange={(event)=>signInChange(event)} required
        />
        <button className={classes.submit} style={{ background: "#2196F3" }}>
        Submit  </button>
    </form>
  );
};

export default SignInInputs;
