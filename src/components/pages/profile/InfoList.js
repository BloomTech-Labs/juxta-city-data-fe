import React from "react";
import profileInfoStyle from "../profileStyles/profileInfoStyle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { deleteProfile } from "../../../functions";
//import Avatar from "@material-ui/core/Avatar";
import ImageUpload from "./ImageUpload";

const InfoList = ({ info, toggleEditing }) => {
  const classes = profileInfoStyle();
  

  const deleteUserProfile = () => {
    deleteProfile(info.id).then(() => window.location.reload());
  };
  const dateOfBirthOld = new Date(info.dob)
  
  
  const dateNew = dateOfBirthOld.getDate()
  const monthNew = dateOfBirthOld.getMonth()
  const yearNew = dateOfBirthOld.getFullYear()
  const dateOfBirthNew = (monthNew+1) + "/" + dateNew + "/" +yearNew;

  return (
    <Card className="" key={info.id}>
      <h2> {info.username}'s profile </h2>
      <ul className={classes.root}>
        <li style={{ listStyle: 'none' }}>
          <img src={info.image_url} alt="" className={classes.large} />
        </li>
        <li style={{listStyle: 'none'}}>
          <ImageUpload info={info} />
        </li>
        {info.first_name ? (
          <li style= {{listStyle: 'none'}}>
            <ListItemText primary="First Name" secondary={info.first_name} />
          </li>
        ) : null}

        {info.last_name ? (
          <li style={{ listStyle: 'none' }}>
            <ListItemText primary="Last Name" secondary={info.last_name} />
          </li>
        ) : null}

        <li style={{ listStyle: 'none' }}>
          <ListItemText primary="Email" secondary={info.email} />
        </li>
        <li style={{ listStyle: 'none' }}>
          <ListItemText primary="Username" secondary={info.username} />
        </li>

        {info.dob ? (
          <li style= {{ listStyle: 'none' }}>
            <ListItemText primary="Date of Birth" secondary={dateOfBirthNew} />
          </li>
        ) : null}

        <li style={{ listStyle: 'none' }}>
          <ListItemText primary="Address" secondary={info.address} />
        </li>
        <li style={{ listStyle: 'none' }}>
          <ListItemText secondary={info.city} />
          <ListItemText secondary={info.state} />
          <ListItemText secondary={info.zip} />
        </li>
      </ul>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        className=""
        onClick={() => toggleEditing()}
      >
         Edit profile
      </Button>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        className=""
        onClick={() => deleteUserProfile()}
      >
        Delete User
      </Button>
    </Card>
  );
};
export default InfoList;
