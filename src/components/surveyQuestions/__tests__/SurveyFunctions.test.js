import axiosMock from "axios";
import { getSurveyData } from "../SurveyFunctions";

describe("getSurveyData", () => {
  it("getSurveyData successfully data from an API", async () => {
    const questions = [
      {
        id: 1,
        question:
          "What is an acceptable cost of living index for your new city?",
        name: "cost_of_living",
        options: [],
      },
      {
        id: 2,
        question: "What is your age group?",
        name: "median_age",
        options: [],
      },
    ];
    const url =
      "https://production-juxta-city-be.herokuapp.com/api/questions/surveyobj";
    const response = { data: questions };
    axiosMock.get.mockResolvedValue(response);
    await getSurveyData().then((data) => expect(data).toEqual(questions))
    // .then((data) => expect(data[0].name).toEqual("cost_of_living"))

    expect(axiosMock.get).toHaveBeenCalled();
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });

  it("getSurveyData erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axiosMock.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(getSurveyData()).rejects.toThrow(errorMessage);
  });
});

describe("putSurveyAnswers", () => {
    it('posts the survey answers in database', async ()=>{

    })
})
