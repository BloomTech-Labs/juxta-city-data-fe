import React, { useContext } from "react";
import ProfileContext from "../../../contexts/ProfileContext";
import InfoList from "./InfoList";


const ProfileInfo = () => {

  const { profileData } = useContext(ProfileContext);

  if (profileData.length > 0) {
    return profileData.map((info, index) => (
      <InfoList key= {index} info={info}/>
    ));
  } else {
    return (
      <div>
        {" "}
        <h4>Please fill in the form to create your profile!</h4>
      </div>
    );
  }
};

export default ProfileInfo;
