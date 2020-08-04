import React from "react";
import { Grid} from "semantic-ui-react";

export default function EconomyBox(props) {
  return (
    <Grid columns="equal" className="box-container">
      <h2>Economy </h2>
      <Grid.Row id={props.title.trim()}>
        <Grid.Column>
          <h3>Household Median Income </h3>
          <h4>{props.data.Median_Income}</h4>
          <p>per year</p>
        </Grid.Column>
        <Grid.Column>
          <h3>Person average Income </h3>
          <h4>{props.data.per_capita_Income}</h4>
          <p>per year</p>
        </Grid.Column>
        <Grid.Column>
          <h3>Poverty Rate </h3>
          <h4>{props.data.Percent_below_Poverty} %</h4>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h3>Unemployement Rate </h3>
          <h4>{props.data.Unemployment_rate} %</h4>
        </Grid.Column>
        <Grid.Column>
          <h3>Crime Rate </h3>
          <h4>{props.data.Crime_rate} </h4>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
