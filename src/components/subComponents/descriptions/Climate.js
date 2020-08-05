import React from 'react';
import { Statistic } from 'semantic-ui-react';
import airindex from "../../../assets/airindex.png";
import sunny from "../../../assets/sunny.png";
import cold from "../../../assets/cold.png";
import rain from "../../../assets/rain.png";

export default function Climate(props) {
  const climateData = [{ title: 'Cold Days', value: props.cityData.Coldday_Count, img:cold },
    { title: 'Rain Days ', value: props.cityData.Rainday_Count, img: rain},
    { title: 'Hot Days', value: props.cityData.Hotday_Count, img:sunny}];

  return (
    <div id='box-container'>
      <h2>Climate</h2>
      <Statistic.Group size='tiny' id={props.title.trim()}>
        <Statistic className="card-stats">
          <h3>Air Quality </h3>
          <Statistic.Value id='value'>{props.cityData.AQI}</Statistic.Value>
          <img alt="Air Quality ilustration" style ={{width:"70%",height: "50%", margin: "0 auto" }}src={airindex} ></img>
        </Statistic>
        {climateData.map((item, index)=> (
          <Statistic className="card-stats" key={index}>
            <h3>{item.title} </h3>
            <Statistic.Value>{item.value}</Statistic.Value>
            <Statistic.Label>days</Statistic.Label> <img alt={item.title+" ilustration"} style ={{width:"60%",height: "60%", margin: "0 auto" }}src={item.img} ></img>
          </Statistic>
        ))}
      </Statistic.Group>
    </div>
  );
}
