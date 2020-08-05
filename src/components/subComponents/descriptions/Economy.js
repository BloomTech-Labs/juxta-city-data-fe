import React from 'react';
import { Statistic } from 'semantic-ui-react';

export default function EconomyBox(props) {
  return (
    <div id='box-container'>
      <h2>Economy </h2>
        <Statistic.Group size='tiny' id={props.title.trim()}> 
          <Statistic className="card-stats"><h3>Household Median Income</h3>
            <Statistic.Value> ${props.data.Median_Income}</Statistic.Value>
            <Statistic.Label>per year</Statistic.Label> </Statistic>
          <Statistic className="card-stats"><h3>Person average Income</h3>
            <Statistic.Value>${props.data.per_capita_Income} </Statistic.Value>
            <Statistic.Label>per year</Statistic.Label> </Statistic>
          <Statistic className="card-stats"> <h3>Poverty Rate</h3>
            <Statistic.Value>{props.data.Percent_below_Poverty} % </Statistic.Value>
          </Statistic>
          <Statistic className="card-stats"><h3>Unemployement Rate</h3>
            <Statistic.Value>{props.data.Unemployment_rate} % </Statistic.Value>
          </Statistic>
        {props.data.Crime_rate === 'No Data Available' ? null : (
            <Statistic className="card-stats"><h3>Crime Rate</h3>
              <Statistic.Value>{props.data.Crime_rate} </Statistic.Value>
            </Statistic> )}
      </Statistic.Group>
   </div>
  );
}
