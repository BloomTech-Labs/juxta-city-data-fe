import React from "react";
import Button from "@material-ui/core/Button";
import SelectState from "./SelectState";
import TextField from "@material-ui/core/TextField";
import formStyles from "./profileStyles/formStyles";

function ProfileInputs({ handleSubmit, addHandleChange }) {
  const classes = formStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.root}
      noValidate autoComplete="off"
    >
      <TextField label="First Name" type="text" name="first_name" onChange={addHandleChange} />
      <TextField label="Last Name" type="text" name="last_name" onChange={addHandleChange} />
      <TextField label="Birthdate"type="date"name="dob" onChange={addHandleChange}
        InputLabelProps={{shrink: true}} />
      <TextField label="Address"type="text"name="address" onChange={addHandleChange} />
      <TextField label="City" type="text" name="city" onChange={addHandleChange} />
      <SelectState addHandleChange={addHandleChange} />
      <TextField label="Zip code" type="number" name="zip" onChange={addHandleChange} />
      <Button type="submit" variant="outlined" color="primary" className={classes.button}>Add profile</Button>
    </form>
  );
}
export default ProfileInputs;
