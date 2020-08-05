import React from 'react';
import { Statistic } from 'semantic-ui-react';

export default function EconomyBox(props) {

  const incomeData = [{ title: 'Household Median Income', value: props.data.Median_Income },
  { title: 'Person average Income ', value: props.data.per_capita_Income }];

  const povertyData = [{ title: 'Poverty Rate', value: props.data.Percent_below_Poverty },
  { title: 'Unemployement Rate ', value: props.data.Unemployment_rate }];

  return (
    <div id='box-container'>
      <h2>Economy </h2>
        <Statistic.Group size='tiny' id={props.title.trim()}> 
          {incomeData.map((item)=>(
            <Statistic className="card-stats"><h3>{item.title}</h3>
              <Statistic.Value> ${item.value}</Statistic.Value>
              <Statistic.Label>per year</Statistic.Label> </Statistic>))}

          {povertyData.map((item)=>(
            <Statistic className="card-stats"> <h3>{item.title}</h3>
              <Statistic.Value>{item.value} % </Statistic.Value> </Statistic> ))}
          
          {props.data.Crime_rate === 'No Data Available' ? null : (
              <Statistic className="card-stats"><h3>Crime Rate</h3>
                <Statistic.Value>{props.data.Crime_rate} </Statistic.Value>
              </Statistic>)}
      </Statistic.Group>
   </div>
  );
}
