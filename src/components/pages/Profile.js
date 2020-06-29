import React, { useEffect, useState,useContext } from "react";
import NavBar from "../Navbar.js";
import ProfileInfo from "./ProfileInfo";
import AddUser from "./AddProfile.js";
import EditUser from "./EditUser";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProfileContext from "../../contexts/ProfileContext";
import { createProfileContext } from "../../functions";
import EditProfileInputs from "./profileStyles/EditProfileInputs.js";


export default function Profile(props) {


  console.log("props users ====>", props.users)

  const [editing, setEditing] = useState(false)
  const { setProfileData } = useContext(ProfileContext);
  //UseEffect that calls the profile creation request and sets it to Create Context.
  useEffect(() => {
    createProfileContext().then((res) => setProfileData(res));
  }, [setEditing]);

 
//Local initial State for the signed in user upon edit****************
  const initialFormState = {
    first_name: null,
    last_name: null,
    address: null,
    city: null,
    dob: null,
    state: null,
    zip: null,
  };
 
  const [currentUser, setCurrentUser] = useState(initialFormState)//function used to pass values to edit functionality

  //Toggle used to switch from Add page to Edit page.
const toggleEditing = () => {
  setEditing(true)
}

//Function that sets Editing from False to True.
  const editRow = user => {
    setEditing(true)
    setCurrentUser({ first_name: user.first_name, last_name: user.last_name, address: user.address, city: user.city, dob: user.dob, state: user.state, zip: user.zip })
  }

  return (
    <section>
      <NavBar {...props} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ProfileInfo toggleEditing={toggleEditing} />
          </Grid>
          <Grid item xs={8}>
            {editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUser users={props.users} editRow={editRow} />
              </div>
            ) : (
                <div>
                  <AddUser {...props} />
                </div>

              )}
          </Grid>
          {/*<Grid item xs={8}>
            <AddUser {...props} />
            </Grid>*/}
        </Grid>
      </Container>
    </section>
  );
}
