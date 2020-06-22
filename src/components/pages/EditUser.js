import React, { useState, useEffect } from "react";
import EditForm from "./EditForm";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateUser(user.id, user);
  };

  return (
    <EditForm
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      user={user}
      setEditing={props.setEditing}
    />
  );
};

export default EditUser;
