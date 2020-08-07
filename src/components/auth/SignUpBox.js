import React from "react";
import SignUpInputs from "./SignUpInputs";
import { Card,Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import newlogo from "../../assets/newlogo.png";

const SignUpBox = ({ signUpChange, handleSubmit, form }) => {
  return (
    <Card className="ui centered cards" style={{padding:"20px"}}>
      <Image src={newlogo} alt="findur newlogo" />
      <Header className="ui icon header" as='h1' >Sign Up</Header>
      <SignUpInputs
        signUpChange={signUpChange}
        handleSubmit={handleSubmit}
        form={form}
      />
    </Card>
  );
};

export default SignUpBox;
