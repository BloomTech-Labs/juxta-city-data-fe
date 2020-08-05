import React from 'react';
import { Statistic } from 'semantic-ui-react';

export default function Population(props) {
  return ( 
  <div id='box-container'>
     <h2 >Population </h2>
      <Statistic.Group size='small' id={props.title.trim()}> 
     <Statistic><h3 >Population </h3>
       <Statistic.Value>{props.data.population}</Statistic.Value>
       <Statistic.Label>People</Statistic.Label> <p>as of 2017</p>
       <Statistic >
         <Statistic.Value> {props.data.population_change}%</Statistic.Value><p>since 2000</p>
       </Statistic>
     </Statistic>
     <Statistic > <h3>Density </h3>
       <Statistic.Value>{props.data.Population_Density}</Statistic.Value>
       <Statistic.Label>people/mi2</Statistic.Label>
       <Statistic >
         <Statistic.Value>1,304</Statistic.Value> <Statistic.Label>people/mi2</Statistic.Label><p>optimal Density</p>
       </Statistic>
     </Statistic>
     <Statistic ><h3>Median age </h3>
       <Statistic.Value>{props.data.Median_Age}</Statistic.Value><Statistic.Label>years</Statistic.Label>
     </Statistic>
     </Statistic.Group>
   </div>
  );
};
