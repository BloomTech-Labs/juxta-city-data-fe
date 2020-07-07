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

export default function Profile(props) {
  const [editing, setEditing] = useState(false);
  const { profileData, setProfileData } = useContext(ProfileContext);
  console.log(props, "props in profile");
  useEffect(() => {
    createProfileContext().then((res) => setProfileData(res));
  }, [setEditing]);

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
          {editing ? (
            <Grid item xs={8}>
              <EditUser users={props.users} editing={editing} />
              <AddProfile profileData={profileData} />
            </Grid>
          ) : (
            <Grid item xs={8}>
              <Favorites />
              <RecommendedComponent {...props} />
            </Grid>
          )}
        </Grid>
      </Container>
    </section>
  );
}
