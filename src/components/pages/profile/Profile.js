import React, { useEffect, useState, useContext } from "react";
import NavBar from "../../Navbar.js";
import ProfileInfo from "./ProfileInfo";
import AddProfile from "./AddProfile.js";
import EditUser from "./EditUser";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProfileContext from "../../../contexts/ProfileContext";
import { createProfileContext } from "../../../functions";
import RecommendedComponent from "../../recomended/RecommendedComponent";
import Favorites from "../../Favorites/Favorites.js";
import { createUserContext } from "../../../functions";
import UserContext from "../../../contexts/UserContext";

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
    <section>
      <NavBar {...props} />
    
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ProfileInfo toggleEditing={toggleEditing} />
          </Grid>
          <AddProfile profileData={profileData} />
          {editing ? (
            <Grid item xs={8}>
              <EditUser users={props.users} editing={editing} />
            </Grid>
          ) : (
            <Grid item xs={8}>
              <Favorites {...props} />
              <RecommendedComponent {...props} />
            </Grid>
          )}
        </Grid>
      </Container>
    </section>
  );
}
