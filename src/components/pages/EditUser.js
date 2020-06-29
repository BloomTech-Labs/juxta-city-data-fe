import React, { useState, useEffect } from "react";
import EditForm from "./EditForm";
import { editProfile } from "../../functions";

const EditUser = (props) => {
  const [user, setUser] = useState(props.users);//removed .currentUser

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.users);//removed .currentUser
  }, [props.users]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    editProfile(user)
    console.log("editted!!", user)
   window.location.reload()
  };

  console.log("===> current user", user)

  return (
    <div>
    Edit User
  
    <EditForm
      handleEditChange={handleEditChange}
      handleEditSubmit={handleEditSubmit}
      user={user}
      setEditing={props.setEditing}
    />
    </div>
  );
};

export default EditUser;
