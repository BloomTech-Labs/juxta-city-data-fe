import React from "react";
import ProfileInputs from "./ProfileInputs";
//import ExtraProfileInputs from "./ExtraProfileInputs";

function AddProfileForm({ handleSubmit, addHandleChange }) {
  return (
        // <ExtraProfileInputs
  
        <ProfileInputs
          handleSubmit={handleSubmit}
          addHandleChange={addHandleChange}
        />
  );
}
export default AddProfileForm;
