import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  { name: "Jan", booking: 10 },
  { name: "Feb", booking: 20 },
  { name: "Mar", booking: 13 },
  { name: "Apr", booking: 21 },
  { name: "May", booking: 15 },
  { name: "Jun", booking: 25 },
];

const ChartComponent = () => (
  <div>
    <h1 className="font-bold text-xl">Sales Chart</h1>
    <BarChart width={750} height={500} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="booking" fill="#58a0ed" />
    </BarChart>
  </div>
);

export default ChartComponent;
