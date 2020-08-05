import React from 'react';
import { Grid, Statistic } from 'semantic-ui-react';

export default function Climate(props) {
  return (
    <Grid columns='equal' id='box-container'>
      <h2>Climate </h2>
      <Grid.Row id={props.title.trim()}>
        <Grid.Column>
          <Statistic size='tiny'>
            <h3>Air Quality </h3>
            <Statistic.Value id='value'>{props.cityData.AQI}</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='tiny'>
            <h3>Cold Days </h3>
            <Statistic.Value>{props.cityData.Coldday_Count}</Statistic.Value>
            <Statistic.Label>days</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='tiny'>
            <h3>Rain Days </h3>
            <Statistic.Value>{props.cityData.Rainday_Count}</Statistic.Value>
            <Statistic.Label>days</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size='tiny'>
            <h3>Hot Days </h3>
            <Statistic.Value>{props.cityData.Hotday_Count}</Statistic.Value>
            <Statistic.Label>days</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
