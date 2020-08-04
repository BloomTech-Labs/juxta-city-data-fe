import React from 'react';
import { Grid, Statistic } from 'semantic-ui-react';

export default function EconomyBox(props) {
  return (
    <Grid columns='equal' className='box-container'>
      <h2>Economy </h2>
      <Grid.Row id={props.title.trim()}>
        <Grid.Column>
          <Statistic size='tiny'><h3>Household Median Income</h3>
            <Statistic.Value id='value'> ${props.data.Median_Income}</Statistic.Value>
            <Statistic.Label>per year</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='tiny'><h3>Person average Income</h3>
            <Statistic.Value id='value'>${props.data.per_capita_Income} </Statistic.Value>
            <Statistic.Label>per year</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='tiny'> <h3>Poverty Rate</h3>
            <Statistic.Value id='value'>{props.data.Percent_below_Poverty} % </Statistic.Value>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Statistic size='tiny'><h3>Unemployement Rate</h3>
            <Statistic.Value id='value'>{props.data.Unemployment_rate} % </Statistic.Value>
          </Statistic>
        </Grid.Column>
        {props.data.Crime_rate === 'No Data Available' ? null : (
          <Grid.Column>
            <Statistic size='tiny'><h3>Crime Rate</h3>
              <Statistic.Value id='value'>{props.data.Crime_rate} </Statistic.Value>
            </Statistic>
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  );
}
