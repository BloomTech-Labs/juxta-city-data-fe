import React, { useEffect, useContext, useState } from "react";
import ProfileContext from "../../../contexts/ProfileContext";
import { createProfileContext } from "../../../functions";
import EditProfileInputs from "./EditProfileInputs";

function EditForm({ handleEditSubmit, handleEditChange }) {
  const [userData, setUserData] = useState();

  const { setProfileData } = useContext(ProfileContext);
  useEffect(() => {
    createProfileContext().then((res) => setUserData(res[0]));
  }, [setProfileData]);

  return (
    <EditProfileInputs
      handleSubmit={handleEditSubmit}
      addHandleChange={handleEditChange}
      userData={userData}
    />
  );
}

export default EditForm;
