//import jwt_decode from "jwt-decode";
import { axiosWithAuth } from "../../../../functions/axiosWithAuth";

const putSurveyAnswers = async (answers, userId ) =>{
    // const token = localStorage.getItem("token");
    // const userId = jwt_decode(token).userid;
 
    axiosWithAuth()
    .put(`https://production-juxta-city-be.herokuapp.com/api/profile/${userId}/answers`, 
    answers
    )
    .then((res)=>{
        console.log(res)
    })
    .catch((err) => {
        console.log("error", err);
      });
}

export {
    putSurveyAnswers
};
