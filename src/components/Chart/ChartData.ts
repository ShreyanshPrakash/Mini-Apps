import type { BarOptions, ChartData, ChartOptions } from "chart.js";

export const Data = [
  {
    id: 1,
    year: 2017,
    userGain: 123,
    userLost: 12,
  },
  {
    id: 2,
    year: 2018,
    userGain: 123,
    userLost: 12,
  },
  {
    id: 3,
    year: 2019,
    userGain: 123,
    userLost: 12,
  },
  {
    id: 4,
    year: 2020,
    userGain: 123,
    userLost: 12,
  },
  {
    id: 6,
    year: 2021,
    userGain: 123,
    userLost: 12,
  },
];

export const BarChartdata = {
  labels: Data.map((item) => item.year),
  datasets: [
    {
      label: "Number of user gains",
      data: Data.map((item) => item.userGain * Math.random()),
      backgroundColor: "#4a5568",
      borderColor: "#4a5568",
      borderWidth: 1,
      barThickness: 8,
    },
    {
      label: "Number of user gains",
      data: Data.map((item) => item.userGain * Math.random()),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
      barThickness: 8,
    },
    {
      label: "Number of user gains",
      data: Data.map((item) => item.userGain * Math.random()),
      backgroundColor: "#4a5568",
      borderColor: "#4a5568",
      borderWidth: 1,
      barThickness: 8,
      borderRadius: 24,
      fill: false,
    },
  ],
};

export const BarChartOptions: BarOptions = {
  aspectRatio: 1,
//   indexAxis: 'y',
  scales: {
    y: {
      beginAtZero: false,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
