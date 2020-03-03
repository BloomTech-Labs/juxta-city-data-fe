import React from "react";
import NavBar from "./NavBar.js";
import ContentBody from "./ContentBody.js";

export default function Dashboard(props) {
  return (
    <>
      <NavBar {...props}/>
      <ContentBody />
    </>
  );
}
