import React from "react";
import { styles } from "./authStlyes";
import SignUpInputs from "./SignUpInputs";

const SignUpBox = ({ signUpChange, handleSubmit, form }) => {
  const classes = styles();
  return (
    <div className={classes.box} style={{ background: "#2196F3" }}>
      <h3 className={classes.h3}>Sign Up</h3>
      <SignUpInputs
        signUpChange={signUpChange}
        handleSubmit={handleSubmit}
        form={form}
      />
    </div>
  );
};

export default SignUpBox;
