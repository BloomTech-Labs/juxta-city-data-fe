import React, { useContext } from "react";
import ProfileContext from "../../../contexts/ProfileContext";
import InfoList from "./InfoList";
import SurveyAnswersBox from "./surveyAnswers/surveyAnswersBox";
import "../../css/neumorphism.css"

const ProfileInfo = ({toggleEditing}) => {

  const { profileData } = useContext(ProfileContext);

  if (profileData.length > 0) {
    return profileData.map((info, index) => (

      <div class="profile-card mb-5" key={index}>
        <div class="card bg-primary border-light shadow-soft text-center">
          <InfoList info={info} toggleEditing={toggleEditing} />
          <SurveyAnswersBox index={index} />
        </div>
      </div>
    ));
  } else {
    return (
      <div >
        {" "}
        <h4>Please fill in the form to create your profile!</h4>
      </div>
    );
  }
};

export default ProfileInfo;
