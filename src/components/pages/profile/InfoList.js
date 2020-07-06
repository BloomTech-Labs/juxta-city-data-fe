import React, { useState } from 'react';
import profileInfoStyle from '../profileStyles/profileInfoStyle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageUpload from './ImageUpload';
import Paper from '@material-ui/core/Paper';

const InfoList = ({ info }) => {
  const classes = profileInfoStyle();
  return (
    <Paper className={classes.paper} key={info.id}>
      <h2> {info.username}'s profile </h2>
      <List className={classes.root}>
        <ListItem>
          <Avatar src={info.image_url} alt='' className={classes.large} />
        </ListItem>
        <ListItem>
          <ImageUpload info={info} />
        </ListItem>
        <ListItem>
          <ListItemText primary='First Name' secondary={info.first_name} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Last Name' secondary={info.last_name} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Email' secondary={info.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Username' secondary={info.username} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Date of Birth' secondary={info.dob} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Address' secondary={info.address} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={info.city} />
          <ListItemText secondary={info.state} />
          <ListItemText secondary={info.zip} />
        </ListItem>
      </List>
    </Paper>
  );
};
export default InfoList;
