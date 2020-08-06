import React from 'react';
import { Statistic } from 'semantic-ui-react';
import broke from "../../../assets/broke.png";
import unemployed from "../../../assets/unemployed.png"
import handcuffs from "../../../assets/handcuffs.png"
import moneybag from "../../../assets/moneybag.png"
import affiliate from "../../../assets/affiliate.png"

export default function EconomyBox(props) {

  const incomeData = [{ title: 'Household Median Income', value: props.data.Median_Income , img: moneybag},
  { title: 'Person average Income ', value: props.data.per_capita_Income, img:affiliate },
  { rate: 'Poverty Rate', percentage: props.data.Percent_below_Poverty, icon:broke },
  { rate: 'Unemployement Rate ', percentage: props.data.Unemployment_rate, icon:unemployed }];

  return (
    <div id='box-container'>
      <h2>Economy </h2>
        <Statistic.Group size='tiny' id={props.title.trim()}> 

          {incomeData.slice(0, 2).map((item, index)=>(
            <Statistic className="card-stats" key={index}><h3>{item.title}</h3>
              <Statistic.Value> ${item.value}</Statistic.Value>
              <Statistic.Label>per year</Statistic.Label><img alt="" src={item.img} ></img> 
              </Statistic>))}

          {incomeData.slice(2, 4).map((item, index)=>(
            <Statistic className="card-stats" key={index}> <h3>{item.rate}</h3>
              <Statistic.Value>{item.percentage} % </Statistic.Value> <img alt="" src={item.icon} ></img>
              </Statistic> ))}
          
          {props.data.Crime_rate === 'No Data Available' ? null : (
              <Statistic className="card-stats"><h3>Crime Rate</h3>
                <Statistic.Value>{props.data.Crime_rate} </Statistic.Value><img alt="" src={handcuffs} ></img>
              </Statistic>)}
              
      </Statistic.Group>
   </div>
  );
}
