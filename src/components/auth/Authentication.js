import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Authentication(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <SignUp {...props} />
      <SignIn {...props} />
    </div>
  );
}
