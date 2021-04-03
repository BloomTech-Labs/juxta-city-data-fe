import React, { useState, useEffect, useContext } from "react";
import EditForm from "./EditForm";
import { editProfile } from "../../../functions";
import ProfileContext from "../../../contexts/ProfileContext";

const EditUser = (props) => {
  const { profileData, setProfileData } = useContext(ProfileContext);
  const [user, setUser] = useState(props.currentUser);
  const profileId = profileData[0].id;

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    editProfile(profileId, user).then(() => window.location.reload());
  };

  return (
    <EditForm
      handleEditChange={handleEditChange}
      handleEditSubmit={handleEditSubmit}
    />
  );
};

export default EditUser;
