import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.js";
import Header from "../components/Header.js";

export default function LandingPage(props) {
  const user = useContext(UserContext);
  return (
    <div>
      <Header />
    </div>
  );
}
