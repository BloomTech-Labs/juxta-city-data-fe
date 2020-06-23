import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import formStyles from "./formStyles";
import ProfileInputs from "./ProfileInputs";

function AddProfileForm({ handleSubmit, addHandleChange }) {
  const classes = formStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <ProfileInputs
          handleSubmit={handleSubmit}
          addHandleChange={addHandleChange}
        />
      </Paper>
    </Grid>
  );
}

export default AddProfileForm;
