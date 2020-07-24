import React, { useState } from "react";
import axios from "axios";
import SignInBox from "./SignInBox";

export default function SignIn(props) {
const [signInForm, setSignInForm] = useState({ username:'',
password:''});

  const signInChange = (e) => {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value })};

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://production-juxta-city-be.herokuapp.com/api/auth/signin", signInForm )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/profile");
      })
      .catch((err) => { console.log(err);
        document.getElementById("signin-error").style.display = "block"});
  };

  return (
    <SignInBox signInChange={signInChange} handleSubmit={handleSubmit} signInForm={signInForm} />
  );
};
