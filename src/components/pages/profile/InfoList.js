import React from "react";
import profileInfoStyle from "../profileStyles/profileInfoStyle";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

const InfoList = ({ info }) => {
  const classes = profileInfoStyle();
 
  return (
    <Paper className={classes.paper} key={info.id}>
      <h2> {info.username}'s profile </h2>
      <List className={classes.root}>
        {info.first_name || info.last_name ? (
          <div>
            Full Name
            <p>
              {info.first_name} {info.last_name}
            </p>
          </div>
        ) : null}
        <div>
          Email
          <p>{info.email}</p>
        </div>
        <div>
          Username
          <p>{info.username}</p>
        </div>
        {info.dob ? (
          <div>
            Date of Birth
            <p>{info.dob}</p>
          </div>
        ) : null}
        {info.address || info.city || info.state || info.zip ? (
          <div>
            Address
            <p>{info.address}</p>
            <p>
              {info.city} {info.state} {info.zip}
            </p>
          </div>
        ) : null}
      </List>
    </Paper>
  );
};
export default InfoList;
