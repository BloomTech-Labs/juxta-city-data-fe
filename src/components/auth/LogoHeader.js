import React from "react";
import { Image, Header } from "semantic-ui-react";
import newlogo from "../../assets/newlogo.png";
import { useHistory } from "react-router-dom";

const LogoHeader = ({ title }) => {
  const history = useHistory();
  return (
    <>
      <Image
        onClick={() => {
          history.push("/");
        }}
        src={newlogo}
        alt="findur newlogo"
      />
      <Header className="ui icon header" as="h1">
        {title}
      </Header>
    </>
  );
};

export default LogoHeader;
