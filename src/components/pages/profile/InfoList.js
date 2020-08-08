import React from "react";
import profileInfoStyle from "../profileStyles/profileInfoStyle";
//import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { deleteProfile } from "../../../functions";
//import Avatar from "@material-ui/core/Avatar";
import ImageUpload from "./ImageUpload";
import "../../../index.scss"

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
    
    <div className="card-profile" key={info.id}>
      
        <div className="card-profile_img">
          <img src={info.image_url} alt="User profile" />
        </div>
      <div className="card-profile_user-info">
        <span className="infos_name">{info.username}</span>
        <ImageUpload info={info} />
      </div>
        
          
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
          <ListItemText primary="Email" secondary={info.email} />
        
          <ListItemText primary="Username" secondary={info.username} />

        {info.dob ? (
          <li style= {{ listStyle: 'none' }}>
            <ListItemText primary="Date of Birth" secondary={dateOfBirthNew} />
          </li>
        ) : null}

          <ListItemText primary="Address" secondary={info.address} />
        
        <li style={{ listStyle: 'none' }}>
          <ListItemText secondary={info.city} />
          <ListItemText secondary={info.state} />
          <ListItemText secondary={info.zip} />
        </li>
        <button
          type="submit"
          variant="outlined"
          className="btn-info"
          onClick={() => toggleEditing()}
        >
          Edit profile
      </button>
        <button
          type="submit"
          variant="outlined"
          className="btn-info"
          onClick={() => deleteUserProfile()}
        >
          Delete User
      </button>  
      
    </div>
  );
};
export default InfoList;
