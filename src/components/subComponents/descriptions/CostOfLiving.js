import React from "react";

import { Grid} from "semantic-ui-react";

export default function CostOfLiving(props) {
    let hdti = Math.floor((props.cityData.HDTI)*100)/100
  return (
    <Grid columns="equal" className="box-container">
      <h2>Cost of living </h2>
      <Grid.Row id={props.title.trim()}>
        <Grid.Column>
          <h3>Cost of living score </h3>
          <h4>{props.cityData.Cost_of_Living_Index}</h4>
        </Grid.Column>
        <Grid.Column>
          <h3>Median house value</h3>
          <h4>$ {props.cityData.Median_House_Value}</h4>
          <p> {hdti} dept/income ratio</p>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column>
          <h3>Median Rent </h3>
          <h4>$ {props.cityData.Median_Rent}</h4>
        </Grid.Column>
        <Grid.Column>
          <h3>Commute time </h3>
          <h4>{props.cityData.Average_Commute_Time} min</h4>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
