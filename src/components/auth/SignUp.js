import React, { useState } from "react";
import axios from "axios";
import SignUpBox from "./SignUpBox";

const initialState = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp({ history }) {
  const [form, setForm] = useState(initialState);

  const signUpChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })};

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://production-juxta-city-be.herokuapp.com/api/auth/signup", form )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/dashboard");
      })
      .catch((err) => {
        document.getElementById("error-message").style.display = "block"});
  };

  return (
    <SignUpBox signUpChange={signUpChange} handleSubmit={handleSubmit} form={form} />
  );
};
