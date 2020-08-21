import React, { useContext } from "react";
import ProfileContext from "../../../contexts/ProfileContext";
import InfoList from "./InfoList";
import SurveyAnswersBox from "./surveyAnswers/surveyAnswersBox";

const ProfileInfo = ({toggleEditing}) => {

  const { profileData } = useContext(ProfileContext);

  if (profileData.length > 0) {
    return profileData.map((info,index) => (
     <div key={index} >
      <InfoList  info={info} toggleEditing={toggleEditing}/>
      <SurveyAnswersBox index={index}  />
     </div>
    ));
  } else {
    return (
      <div style={{marginTop: "40px" }}>
        {" "}
        <h2>Please fill in the form to create your profile!</h2>
      </div>
    );
  }
};

export default ProfileInfo;
