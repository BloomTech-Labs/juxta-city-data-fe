import React from 'react';
import { Statistic } from 'semantic-ui-react';
import airindex from "../../../assets/airindex.png";
import sun from "../../../assets/sun.png";
import snowflake from "../../../assets/snowflake.png";
import rainy from "../../../assets/rainy.png";

export default function Climate(props) {
  const climateData = [{ title: 'Cold Days', value: props.cityData.Coldday_Count, img:snowflake },
    { title: 'Hot Days', value: props.cityData.Hotday_Count, img:sun},
    { title: 'Rain Days ', value: props.cityData.Rainday_Count, img: rainy},
    ];

  return (
    <div id='box-container'>
      <h2>Climate</h2>
      <Statistic.Group size='tiny' id={props.title.trim()}>

        <Statistic className="card-stats">
          <h3>Air Quality </h3>
          <Statistic.Value id='value'>{props.cityData.AQI}</Statistic.Value>
          <img alt="" style ={{width:"50%",height: "45%" }} src={airindex} ></img>
        </Statistic>

        {climateData.map((item, index)=> (
          <Statistic className="card-stats" key={index}>
            <h3>{item.title} </h3>
            <Statistic.Value>{item.value}</Statistic.Value>
            <Statistic.Label>days</Statistic.Label> <img alt="" src={item.img} ></img>
          </Statistic>
        ))}
        
      </Statistic.Group>
    </div>
  );
}
