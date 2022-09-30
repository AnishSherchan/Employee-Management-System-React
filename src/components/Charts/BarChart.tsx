import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Total Earning comparison",
    },
  },
};

const BarChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Pervious Year",
        data: [
          1334, 4344, 955, 1366.5, 6735, 2771, 415, 6661, 3893, 9966, 787, 788,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Current Year",
        data: [
          1124, 4333, 9444, 134.55, 4435, 2344, 3415, 1134, 3333, 6633, 747,
          848,
        ],
        borderColor: "rgb(96,127,232)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="p-4 bg-white rounded-3xl">
      <Bar width="550px" height="300px" options={options} data={data} />
    </div>
  );
};

export default BarChart;
