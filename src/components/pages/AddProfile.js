import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import AddProfileForm from "./AddProfileForm";
import { postProfileRequest } from "../../functions";

const AddProfile = (props) => {
  const token = localStorage.getItem("token");
  const userId = jwt_decode(token).userid;

  const initialFormState = {
    first_name: null,
    last_name: null,
    address: null,
    city: null,
    dob: null,
    state: null,
    zip: null,
  };

  const [profileBody, setprofileBody] = useState(initialFormState);

  const addHandleChange = (e) => {
    setprofileBody({ ...profileBody, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postProfileRequest(profileBody, userId);
    setprofileBody(userId);
  };

  return (
    <AddProfileForm
    profileBody={profileBody}
      handleSubmit={handleSubmit}
      addHandleChange={addHandleChange}
    />
  );
};

export default AddProfile;
