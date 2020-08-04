import React from 'react';

import { Grid, Statistic } from 'semantic-ui-react';

export default function CostOfLiving(props) {
  let hdti = Math.floor(props.cityData.HDTI * 100) / 100;
  return (
    <Grid columns='equal' className='box-container'>
      <h2>Cost of living </h2>
      <Grid.Row id={props.title.trim()}>
        <Grid.Column>
          <Statistic size='tiny'> <h3>Cost of living score</h3>
            <Statistic.Value id='value'>{props.cityData.Cost_of_Living_Index} </Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='tiny'><h3>Median house value </h3> <Statistic.Value>$ {props.cityData.Median_House_Value}
            </Statistic.Value>
            <Statistic size='mini'> <Statistic.Value>{hdti}</Statistic.Value>
              <Statistic.Label> dept/income ratio</Statistic.Label>
            </Statistic>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Statistic size='tiny'> <h3>Median Rent </h3> 
          <Statistic.Value>$ {props.cityData.Median_Rent}</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='tiny'> <h3>Commute time </h3>
            <Statistic.Value> {props.cityData.Average_Commute_Time}</Statistic.Value>
            <Statistic.Label>min</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
