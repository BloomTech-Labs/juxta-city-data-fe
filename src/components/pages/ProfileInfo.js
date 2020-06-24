import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import ProfileContext from "../../contexts/ProfileContext";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    width: "100%",
  },
}));

const ProfileInfo = (props) => {
  const classes = useStyles();
  const { profileData } = useContext(ProfileContext);

  if (profileData.length > 0) {
    return profileData.map((i) => (
      <Paper className={classes.paper} key={i.id}>
        <h2>Profile</h2>
        <List className={classes.root}>
          <ListItem>
            <ListItemText primary="First Name" secondary={i.first_name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={i.last_name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={i.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Username" secondary={i.username} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Date of Birth" secondary={i.dob} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address" secondary={i.address} />
          </ListItem>
          <ListItem>
            <ListItemText secondary={i.city} />
            <ListItemText secondary={i.state} />
            <ListItemText secondary={i.zip} />
          </ListItem>
        </List>
      </Paper>
    ));
  } else {
    return (
      <div>
        {" "}
        <h4>Please fill in the form to create your profile!</h4>
      </div>
    );
  }
};

export default ProfileInfo;
