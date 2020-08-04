import React from "react";
// import "../../city.css";
import { Grid } from "semantic-ui-react";

export default function Climate(props) {
  return (
    <Grid columns="equal" className="box-container">
      <h2>Climate </h2>
      <Grid.Row id={props.title.trim()}>
        <Grid.Column>
          <h3>Air Quality </h3>
          <h4>{props.cityData.AQI}</h4>
        </Grid.Column>
        <Grid.Column>
          <h3>Cold Days </h3>
          <h4>{props.cityData.Coldday_Count}</h4>
          <p>days</p>
        </Grid.Column>
        <Grid.Column>
          <h3>Rain Days </h3>
          <h4>{props.cityData.Rainday_Count}</h4>
          <p>days</p>
        </Grid.Column>
        <Grid.Column>
          <h3>Rain Days </h3>
          <h4>{props.cityData.Hotday_Count}</h4>
          <p>days</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
