import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "jan",
    Cases: 2400,
  },
  {
    name: "feb",
    Cases: 1000,
  },
  {
    name: "march",
    Cases: 2000,
  },
  {
    name: "aprl",
    Cases: 3000,
  },
  {
    name: "may",
    Cases: 4000,
  },
  {
    name: "jun",
    Cases: 5000,
  },
  {
    name: "jul",
    Cases: 6000,
  },
];

function Chart() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {" "}
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Cases"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}
export default Chart;
