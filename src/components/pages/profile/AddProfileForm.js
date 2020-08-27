import React from "react";
import ProfileInputs from "./ProfileInputs";

function AddProfileForm({ handleSubmit, addHandleChange }) {
  return (
    <ProfileInputs
      handleSubmit={handleSubmit}
      addHandleChange={addHandleChange}
    />
  );
}
export default AddProfileForm;
