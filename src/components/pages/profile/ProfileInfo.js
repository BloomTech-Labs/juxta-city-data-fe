import React, { useContext } from "react";
import ProfileContext from "../../../contexts/ProfileContext";
import InfoList from "./InfoList";
import SurveyAnswersBox from "./surveyAnswers/surveyAnswersBox";


const ProfileInfo = () => {

  const { profileData } = useContext(ProfileContext);

  if (profileData.length > 0) {
    return profileData.map((info, index) => (
      <div key ={info.id}>
      <InfoList  index={index} info={info}/>
      <SurveyAnswersBox index={index}  />
    </div>
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
