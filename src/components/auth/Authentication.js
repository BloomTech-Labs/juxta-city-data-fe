import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Divider, Grid, Segment } from "semantic-ui-react";

const Authentication = (props) => (
  <Segment
    style={{
      display: "flex",
      flexDirection: "row",
      marginTop: "20px",
    }}
    placeholder
  >
    <Grid columns={2} relaxed="very" stackable>
      <Grid.Column>
        <SignUp {...props} />
      </Grid.Column>

      <Grid.Column verticalAlign="middle">
        <SignIn {...props} />
      </Grid.Column>
    </Grid>
    <Divider id="my-divider" vertical>Or </Divider>
  </Segment>
);

export default Authentication;
