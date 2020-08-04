import React from "react";
import { Grid, Statistic } from "semantic-ui-react";

export default function Population(props) {
  return (
    <Grid columns="equal" className="box-container">
      <h2>Population </h2>
      <Grid.Row id={props.title.trim()}>
        <Grid.Column>
          <Statistic size="tiny">
            <h3 className="h5">Population </h3>
            <Statistic.Value id="value">
              {props.data.population}
            </Statistic.Value>
            <Statistic.Label>People</Statistic.Label>
            <p>as of 2017</p>
            <Statistic size="mini">
              <Statistic.Value>
                {props.data.population_change}%{" "}
              </Statistic.Value>
              <p>since 2000</p>
            </Statistic>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size="tiny">
            <h3>Density </h3>
            <Statistic.Value>
              {props.data.Population_Density}
            </Statistic.Value>
            <Statistic.Label>people/mi2</Statistic.Label>
            <Statistic size="mini">
              <Statistic.Value>1,304</Statistic.Value>
              <Statistic.Label>people/mi2</Statistic.Label>
              <p>optimal Density</p>
            </Statistic>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size="tiny">
            <h3>Median age </h3>
            <Statistic.Value>
              {props.data.Median_Age}
            </Statistic.Value>
            <Statistic.Label>years</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}