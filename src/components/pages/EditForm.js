import React from "react";
import formStyles from "./profileStyles/formStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProfileInputs from "./ProfileInputs";


function EditForm({ handleSubmit, handleInputChange }) {
  const classes = formStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
      <ProfileInputs
          handleSubmit={handleSubmit}
          addHandleChange={handleInputChange}
        />
      </Paper>
    </Grid>
  );
}

export default EditForm;
