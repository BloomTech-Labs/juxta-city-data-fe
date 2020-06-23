import axios from "axios";
const getSurveyData = async () => {
  const response = await axios.get(
    "https://production-juxta-city-be.herokuapp.com/api/questions/surveyobj"
  );
  return response.data;
};

export {
  getSurveyData,
};
