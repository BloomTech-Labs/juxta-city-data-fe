import React, {useEffect, useContext} from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SelectState from "../profile/SelectState";
import TextField from "@material-ui/core/TextField";
import formStyles from "../profileStyles/formStyles";

function EditProfileInputs({ handleSubmit, addHandleChange, userData }) {

console.log(userData && userData.address)
  const classes = formStyles();
     if(userData){
  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit} className={classes.root}
          noValidate autoComplete="off">
          <TextField label="First Name" type="text" defaultValue={userData.first_name} name="first_name" onChange={addHandleChange} />
          <TextField label="Last Name" type="text" defaultValue={userData.last_name} name="last_name" onChange={addHandleChange} />
          <TextField label="Birthdate"type="date"name="dob" defaultValue={userData.dob} onChange={addHandleChange}
            InputLabelProps={{shrink: true}} />
          <TextField label="Address"type="text"name="address" defaultValue={userData.address} onChange={addHandleChange} />
          <TextField label="City" type="text" name="city" defaultValue={userData.city} onChange={addHandleChange} />
          <SelectState addHandleChange={addHandleChange}/>
          <TextField label="Zip code" type="number" name="zip" defaultValue={userData.zip} onChange={addHandleChange} />
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>Edit profile</Button>
        </form>
      </Paper>
    </Grid>
  );
}else{
  return(
    <h1>loading profile data...</h1>
  )
}
}
export default EditProfileInputs;
