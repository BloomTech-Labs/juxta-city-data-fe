import React from "react";
import SignUpInputs from "./SignUpInputs";

import { Card, Image, Header } from "semantic-ui-react";
import newlogo from "../../assets/newlogo.png";
import { useHistory} from "react-router-dom";

const SignUpBox = ({ signUpChange, handleSubmit, form }) => {
  const history =useHistory();
  return (
    <Card className="ui centered cards" style={{ padding: "20px" }}>
      <Image onClick={()=>{ history.push("/")}}  src={newlogo} alt="findur newlogo" />
      <Header className="ui icon header" as="h1">
        Registration
      </Header>
      <SignUpInputs
        signUpChange={signUpChange}
        handleSubmit={handleSubmit}
        form={form}
      />
    </Card>
  );
};

export default SignUpBox;
