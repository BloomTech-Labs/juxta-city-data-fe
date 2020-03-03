import React from "react";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const CallToAction = props => {
  return (
    <Grid container style={{ padding: '7% 10%' }}>
      <Grid item sm={6}>
      </Grid>
      <Grid item sm={6} style={{ position: 'relative' }}>
        <Typography
          variant="h5"
          align="left"
          style={{
          float: 'left',
          fontWeight: 500
        }}>
          Join now and see what the locals love and hate about the city you're
          interested in 
        </Typography>
        <Link to="/signin">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#8BC34A",
              color: 'white',
              float: 'right',
              marginTop: '15px',
              width: '180px'
          }}>
            Sign Up
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
export default CallToAction;
