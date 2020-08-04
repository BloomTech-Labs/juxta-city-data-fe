import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { renderCustomBarLabel, CustomTooltip } from './graphFunctions';

const BarGraph = ({ arrOfIndustries }) => {
  return (
    <ResponsiveContainer width={'99%'} height={400}>
      <BarChart
        data={arrOfIndustries}
        margin={{
          top: 30,
          right: 0,
          left: 0,
          bottom: 60,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='xlabel' angle={-35} textAnchor='end' />
        <YAxis label={{ value: '%', angle: -90, position: 'insideLeft' }} />
        <Tooltip
          wrapperStyle={{
            width: 120,
            backgroundColor: 'rgb(248,255,255,0.9)',
            border: '1px solid #00CED1',
            borderRadius: 3,
            fontSize: '15px',
            fontWeight: 'bold',
            overflow: 'hidden',
            lineHeight: '15px',
            textAlign: 'center',
          }}
          content={<CustomTooltip />}
        />
        <Legend verticalAlign='top' height={36} />
        <Bar dataKey='Industry' fill='#00CED1' label={renderCustomBarLabel} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarGraph;
