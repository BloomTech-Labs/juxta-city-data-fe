import React from "react";
import SignUpInputs from "./SignUpInputs";
import { Card } from "semantic-ui-react";
import LogoHeader from "./LogoHeader";

const SignUpBox = ({ signUpChange, handleSubmit, form }) => {
  return (
    <Card className="ui centered cards" style={{ padding: "20px" }}>
      <LogoHeader title="Registration" />
      <SignUpInputs
        signUpChange={signUpChange}
        handleSubmit={handleSubmit}
        form={form}
      />
    </Card>
  );
};

export default SignUpBox;
