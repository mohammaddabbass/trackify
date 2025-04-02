import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const PieChartComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
      {/* First Pie Chart */}
      <ResponsiveContainer width={300} height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Second Pie Chart */}
      <ResponsiveContainer width={300} height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data02}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
