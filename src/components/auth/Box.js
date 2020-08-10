import React from "react";
import SignUpInputs from "./SignUpInputs";
import { Card } from "semantic-ui-react";
import LogoHeader from "./LogoHeader";
import SignInInputs from "./SignInInputs";

const Box = ({ signUpChange, handleSubmit, form, name, signInChange, signInForm }) => {
  return (
    <Card className="ui centered cards" style={{ padding: "20px" }}>
      {name === "signup" ? (
        <>
          <LogoHeader title="Registration" />
          <SignUpInputs
            signUpChange={signUpChange}
            handleSubmit={handleSubmit}
            form={form}
          />
        </>
      ) : (
        <>
          <LogoHeader title="Sign In" />
          <SignInInputs
            signInChange={signInChange}
            handleSubmit={handleSubmit}
            signInForm={signInForm}
          />
        </>
      )}
    </Card>
  );
};

export default Box;
