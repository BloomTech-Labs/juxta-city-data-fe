import React from 'react';
import { Statistic } from 'semantic-ui-react';

export default function Climate(props) {
  const climateData = [{ title: 'Cold Days', value: props.cityData.Coldday_Count },
    { title: 'Rain Days ', value: props.cityData.Rainday_Count },
    { title: 'Hot Days', value: props.cityData.Hotday_Count }];

  return (
    <div id='box-container'>
      <h2>Climate</h2>
      <Statistic.Group size='small' id={props.title.trim()}>
        <Statistic>
          <h3>Air Quality </h3>
          <Statistic.Value id='value'>{props.cityData.AQI}</Statistic.Value>
        </Statistic>
        {climateData.map(item => (
          <Statistic>
            <h3>{item.title} </h3>
            <Statistic.Value>{item.value}</Statistic.Value>
            <Statistic.Label>days</Statistic.Label>
          </Statistic>
        ))}
      </Statistic.Group>
    </div>
  );
}
