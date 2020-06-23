import React from "react";
import ProfileInputs from "./ProfileInputs";

function EditForm({ handleEditSubmit, handleEditChange }) {
  return (
      <ProfileInputs
      handleSubmit={handleEditSubmit}
      addHandleChange={handleEditChange}
        />
  );
}

export default EditForm;
