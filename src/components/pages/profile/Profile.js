import React, { useEffect, useState, useContext } from "react";
import NavBar from "../../Navbar.js";
import ProfileInfo from "./ProfileInfo";
import AddProfile from "./AddProfile.js";
import EditUser from "./EditUser";
import ProfileContext from "../../../contexts/ProfileContext";
import { createProfileContext } from "../../../functions";
import RecommendedComponent from "../../recomended/RecommendedComponent";
import Favorites from "../../Favorites/Favorites.js";
import { createUserContext } from "../../../functions";
import UserContext from "../../../contexts/UserContext";
import { Grid} from 'semantic-ui-react'
import ExploreCity from "./ExploreCity";

export default function Profile(props) {
  const [editing, setEditing] = useState(false);
  const { profileData, setProfileData } = useContext(ProfileContext);

  useEffect(() => {
    createProfileContext().then((res) => setProfileData(res));
  }, [setEditing]);

  // this is for favorites
  const { setUserData } = useContext(UserContext);
  useEffect(() => {
    createUserContext().then((res) => setUserData(res));
  }, [ setUserData]);

  const toggleEditing = () => {
    setEditing(true);
  };
  
  return (
    <>
      <NavBar {...props} />
      <Grid style={{ margin:'0 7%'}}>
        <Grid.Row columns={2} style={{justifyContent:'center'}}>
          <Grid.Column width={4}>
            <ProfileInfo toggleEditing={toggleEditing} />
          </Grid.Column>
           <AddProfile profileData={profileData} />
          {editing ? (
            <Grid.Column width={12} >
              <EditUser profileData={profileData} editing={editing} />
            </Grid.Column >
          ) : (
            <Grid.Column  width={12} >
              <Favorites {...props} />
              <RecommendedComponent {...props} />
              <ExploreCity/>
            </Grid.Column >
          )}
        </Grid.Row>
      </Grid>
    </>
  );
}
