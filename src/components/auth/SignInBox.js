import React from "react";
import { Card } from "semantic-ui-react";
import SignInInputs from "./SignInInputs";
import LogoHeader from "./LogoHeader";

const SignInBox = ({ signInChange, handleSubmit, signInForm }) => {
  return (
    <Card className="ui centered cards" style={{ padding: "20px" }}>
      <LogoHeader title="Sign In" />
      <SignInInputs
        signInChange={signInChange}
        handleSubmit={handleSubmit}
        signInForm={signInForm}
      />
    </Card>
  );
};

export default SignInBox;
