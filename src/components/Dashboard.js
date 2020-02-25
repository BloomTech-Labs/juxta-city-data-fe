import React from "react";
import SignedInNavBar from "./SignedInNavBar.js";
import ContentBody from "./ContentBody.js";

export default function Dashboard(props) {
  return (
    <>
      <SignedInNavBar />
      <ContentBody />
    </>
  );
}
