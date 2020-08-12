import React, { useState } from "react";
import axios from "axios";
import Box from "./Box";
import { useHistory } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp(props) {
  const [form, setForm] = useState(initialState);
  const history = useHistory();
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
    <Box name="signup" signUpChange={signUpChange} handleSubmit={handleSubmit} form={form} />
  );
};
