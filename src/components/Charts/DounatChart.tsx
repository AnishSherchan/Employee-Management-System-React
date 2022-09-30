import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DounatChart = ({ totalEmp }) => {
  const data = {
    labels: ["Female", "Male"],
    datasets: [
      {
        label: "# of Votes",
        data: totalEmp,
        backgroundColor: ["#FFB1C1", "#607FE8"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="p-4 bg-white rounded-3xl">
      <Doughnut data={data} />
    </div>
  );
};

export default DounatChart;
