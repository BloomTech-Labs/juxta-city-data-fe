import React, { useEffect, useContext } from "react";
import NavBar from "../../Navbar.js";
import ProfileInfo from "./ProfileInfo";
import AddUser from "./AddProfile.js";
//import EditUser from "./EditUser";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProfileContext from "../../../contexts/ProfileContext";
import { createProfileContext } from "../../../functions";

export default function Profile(props) {
  
  const { setProfileData } = useContext(ProfileContext);
  useEffect(() => {
    createProfileContext().then((res) => setProfileData(res));
  }, [setProfileData]);
  return (
    <section>
      <NavBar {...props} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ProfileInfo />
          </Grid>
          <Grid item xs={8}>
            <AddUser {...props} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
