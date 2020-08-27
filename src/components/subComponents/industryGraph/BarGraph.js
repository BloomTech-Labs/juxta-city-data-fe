
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { renderCustomBarLabel, CustomTooltip } from "./graphFunctions";

const BarGraph = ({ arrOfIndustries }) => {
  return (
    <ResponsiveContainer id="graph-container" width={"98%"} height={500}>
      <BarChart
        style={{ fontSize: "20px" }}
        data={arrOfIndustries}
        margin={{ top: 30, right: 40, left: 0, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="xlabel"
          angle={-35}
          textAnchor="end"
          tick={{ fill: "#000" }}
        />
        <YAxis
          label={{ value: "%", angle: -90, position: "insideLeft" }}
          tick={{ fill: "#000" }}
        />
        <Tooltip
          wrapperStyle={{
            width: 120,
            backgroundColor: "rgb(248,255,255,0.9)",
            border: "1px solid #2196F3",
            borderRadius: 3,
            fontSize: "17px",
            fontWeight: "bold",
            overflow: "hidden",
            lineHeight: "15px",
            textAlign: "center",
          }}
          content={<CustomTooltip />}
        />
        <Legend verticalAlign="top" height={36} />
        <Bar dataKey="Industry" fill="#2196F3" label={renderCustomBarLabel} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarGraph;
