import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import profileInfoStyle from "../../profileStyles/profileInfoStyle";

const AnswerSurvey = ({ info, index, surveyData }) => {
  const classes = profileInfoStyle();

  return (
    <div key={index}>
      {surveyData.map((item) => {
        return (
          <List className={classes.root} key={item.id}>
            <ListItem>
              <ListItemText primary={item.question} />
            </ListItem>
            {item.options.map((opt) => {
              if (info.surveyinfo[item.name] === opt.value) {
                return (
                  <ListItem key={opt.id}>
                    <ListItemText secondary={opt.description} />
                  </ListItem>
                );
              } else {
                return null;
              }
            })}
          </List>
        );
      })}
    </div>
  );
};
export default AnswerSurvey;
