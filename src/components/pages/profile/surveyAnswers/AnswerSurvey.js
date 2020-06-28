import React from "react";

const AnswerSurvey =({info, index, surveyData})=>{
return(
    <div key={index}>
          {surveyData.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.question}</h2>
                <div>
                  {item.options.map((opt) => {
                    if (info.surveyinfo[item.name] === opt.value) {
                      return (
                        <div key={opt.id}>
                          <h4>{opt.description}</h4>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
)
}
export default AnswerSurvey;