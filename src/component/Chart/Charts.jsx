import React, { memo } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const Charter = ({ item }) => {
  return (
    <Line
      data={{
        labels: [Object.keys(item).splice(2, 1), Object.keys(item).splice(3, 1), Object.keys(item).splice(5, 1)],
        datasets: [
          {
            label: item.name,
            data: [item.today, item.yesterday, item.weeks],
            backgroundColor: ["#ffffff"],
            borderColor: [`#${Math.random().toString().substring(2, 8)}`],
            borderWidth: 2,
            fill: false,
            lineTension: 0.3,
          },
        ],
      }}
    />
  );
};

export default memo(Charter);
