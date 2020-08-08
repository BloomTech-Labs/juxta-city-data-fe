import React from "react";
import profileInfoStyle from "../profileStyles/profileInfoStyle";
//import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
//import ListItemText from "@material-ui/core/ListItemText";
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
    <div className="container">
      <div className="card-profile" key={info.id}>
        <div className="card-profile_img">
          <img src={info.image_url} alt="User profile" />
        </div>
        <div className="card-profile_user-info">
          <span className="infos_name">{info.username}</span>
          <ImageUpload info={info} />
        </div>

        <section className="user-list-section">
          <ul className="section-ul">
            {info.first_name ? (
              <li style={{ listStyle: "none" }}>
                <p>{info.first_name}</p>
              </li>
            ) : null}

            {info.last_name ? (
              <li style={{ listStyle: "none" }}>
                <p>{info.last_name}</p>
              </li>
            ) : null}
            <p>{info.email}</p>

            <p>{info.username}</p>

            {info.dob ? (
              <li style={{ listStyle: "none" }}>
                <p>{dateOfBirthNew}</p>
              </li>
            ) : null}

            <p>{info.address}</p>

            <li style={{ listStyle: "none" }}>
              <p>{info.city}</p>
              <p>{info.state} </p>
              <p>{info.zip}</p>
            </li>
          </ul>
          <div className="btn2-twins">
            <div>
              {" "}
              <button
                type="submit"
                variant="outlined"
                className="btn-info"
                onClick={() => toggleEditing()}
              >
                Edit profile
              </button>
            </div>
            <div>
              {" "}
              <button
                type="submit"
                variant="outlined"
                className="btn-info"
                onClick={() => deleteUserProfile()}
              >
                Delete User
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default InfoList;
