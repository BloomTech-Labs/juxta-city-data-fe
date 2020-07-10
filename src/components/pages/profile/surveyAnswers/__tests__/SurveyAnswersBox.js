import React from "react";
import { render } from "@testing-library/react";
import SurveyAnswersBox from "../surveyAnswersBox";
import ProfileContext from "../../../../../contexts/ProfileContext";

it("renders without crashing", () => {
  let profileData = [{
    address: "123 street st",
    city: "Chicago",
    cloudinary_id: "alc2a9zgcbunhxqoanzg",
    dob: null,
    email: "dbjsk@hdj.skdj",
    first_name: "User7030",
    id: 137,
    image_url:
      "http://res.cloudinary.com/dxom5ezr9/image/upload/v1594239451/alc2a9zgcbunhxqoanzg.jpg",
    last_name: "Nolast name",
    password: "$2a$12$n0JRfvfnZ3loQGvY1k8toeSDSB/eD1G.5vq7h0UU//EQR98f1RKRe",
    state: "IL",
    surveyinfo: {
      state: "None",
      population: "4",
      population_change: "0",
      median_age: "4",
      house_cost: "0",
    },
    user_id: 137,
    username: "sjhj",
    zip: 12543,
  }];
  const setProfileData = (data) => (profileData = data);

  let comp = render(
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      <SurveyAnswersBox />
    </ProfileContext.Provider>
  );

  expect(comp.getByText(/Your Survey Answers/i)).toBeInTheDocument();
});
