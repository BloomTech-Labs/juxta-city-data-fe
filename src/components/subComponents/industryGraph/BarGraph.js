import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
    renderCustomBarLabel,
    CustomTooltip,
  } from "./graphFunctions";
  
const BarGraph = ({arrOfIndustries})=>{
    return (
        <BarChart
        width={650}
        height={300}
        data={arrOfIndustries}
        margin={{
          top: 15,
          right: 30,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="xlabel" />
        <YAxis />
        <Tooltip
          wrapperStyle={{
            width: 120,
            backgroundColor: "rgb(248,255,255,0.9)",
            border: "1px solid #00CED1",
            borderRadius: 3,
            fontSize: "15px",
            fontWeight: "bold",
            overflow: "hidden",
            lineHeight: "15px",
          }}
          content={<CustomTooltip />}
        />
        <Legend />
        <Bar dataKey="Industry" fill="#00CED1" label={renderCustomBarLabel} />
      </BarChart>
    )

}
export default BarGraph;