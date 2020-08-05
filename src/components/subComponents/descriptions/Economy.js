import React from 'react';
import { Statistic } from 'semantic-ui-react';

export default function EconomyBox(props) {

  const incomeData = [{ title: 'Household Median Income', value: props.data.Median_Income },
  { title: 'Person average Income ', value: props.data.per_capita_Income },
  { rate: 'Poverty Rate', percentage: props.data.Percent_below_Poverty },
  { rate: 'Unemployement Rate ', percentage: props.data.Unemployment_rate }];

  return (
    <div id='box-container'>
      <h2>Economy </h2>
        <Statistic.Group size='tiny' id={props.title.trim()}> 
          {incomeData.slice(0, 2).map((item)=>(
            <Statistic className="card-stats"><h3>{item.title}</h3>
              <Statistic.Value> ${item.value}</Statistic.Value>
              <Statistic.Label>per year</Statistic.Label> </Statistic>))}

          {incomeData.slice(2, 4).map((item)=>(
            <Statistic className="card-stats"> <h3>{item.rate}</h3>
              <Statistic.Value>{item.percentage} % </Statistic.Value> </Statistic> ))}
          
          {props.data.Crime_rate === 'No Data Available' ? null : (
              <Statistic className="card-stats"><h3>Crime Rate</h3>
                <Statistic.Value>{props.data.Crime_rate} </Statistic.Value>
              </Statistic>)}
      </Statistic.Group>
   </div>
  );
}
