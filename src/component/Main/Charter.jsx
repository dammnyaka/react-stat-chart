import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Charter = ({ chartData }) => {
  return (
    <div className="charter">
      <Line data={chartData} />
    </div>
  );
};

export default Charter;
