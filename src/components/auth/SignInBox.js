import React from "react";
import { styles } from "./authStlyes";
import SignInInputs from "./SignInInputs";

const SignInBox = ({ signInChange, handleSubmit, signInForm }) => {
  const classes = styles();
  return (
    <div className={classes.box} style={{ background: "#8BC34A" }}>
      <h3 className={classes.h3} style={{ color: "white" }}>
        Sign In
      </h3>
      <SignInInputs
        signInChange={signInChange}
        handleSubmit={handleSubmit}
        signInForm={signInForm}
      />
    </div>
  );
};

export default SignInBox;
