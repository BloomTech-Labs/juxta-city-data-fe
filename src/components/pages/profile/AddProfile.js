import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import AddProfileForm from "./AddProfileForm";
import { postProfileRequest } from "../../../functions";
import Loading from "../../Loading";

const initialFormState = {
  first_name: null,
  last_name: null,
  address: null,
  city: null,
  dob: null,
  state: null,
  zip: null,
};

const AddProfile = ({ profileData }) => {
  const token = localStorage.getItem("token");
  const userId = jwt_decode(token).userid;

  const [profileBody, setprofileBody] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const addHandleChange = (e) => {
    setprofileBody({ ...profileBody, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileBody);
    setprofileBody(userId);
    postProfileRequest(profileBody, userId).then(() =>
      window.location.reload()
    );
    setLoading(true);
  };
  return profileData.length === 1 ? null : (
    <>
      {loading ? (
        <Loading />
      ) : (
        <AddProfileForm
          profileBody={profileBody}
          handleSubmit={handleSubmit}
          addHandleChange={addHandleChange}
        />
      )}
    </>
  );
};

export default AddProfile;
