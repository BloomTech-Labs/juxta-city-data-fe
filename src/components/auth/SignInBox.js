import React from "react";
import { Card, Image, Header } from "semantic-ui-react";
import newlogo from "../../assets/newlogo.png";
import SignInInputs from "./SignInInputs";
import { useHistory} from "react-router-dom";

const SignInBox = ({ signInChange, handleSubmit, signInForm}) => {
   const history =useHistory();
  return (
    <Card className="ui centered cards" style={{ padding: "20px" }}>
       <Image onClick={()=>{ history.push("/")}} src={newlogo} alt="findur newlogo" />
       <Header className="ui icon header" as="h1">
        Sign In
      </Header>
      <SignInInputs
        signInChange={signInChange}
        handleSubmit={handleSubmit}
        signInForm={signInForm}
      />
    </Card>
  );
};

export default SignInBox;
