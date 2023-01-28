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
      borderRadius: 48,
      borderSkipped: false,  // bottom border, To make all side rounded
      barPercentage: 0,
      categoryPercentage: 0,
      categoryWidth: 20,
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
      borderRadius: 48,
      barPercentage: 0,
      categoryPercentage: 0,
      categoryWidth: 20,
    },
  ],
};

export const BarChartOptions: BarOptions = {
  aspectRatio: 1,
  //   indexAxis: 'y',
  //   scales: {
  //     y: {
  //       beginAtZero: false,
  //     },
  //   },
  tension: 0.4,
  scales: {
    x: {
        grid: {
            display: false,
        },
      display: false,
      scaleLabel: {
        display: true,
        labelString: "Month",
      },
      gridLines: {
        display: false,
        borderDash: [2],
        borderDashOffset: [2],
        color: "rgba(33, 37, 41, 0.3)",
        zeroLineColor: "rgba(33, 37, 41, 0.3)",
        zeroLineBorderDash: [2],
        zeroLineBorderDashOffset: [2],
      },
    },
    y: {
        grid: {
            display: false,
        },
      display: false,
      scaleLabel: {
        display: false,
        labelString: "Value",
      },
      gridLines: {
        display: true,
        borderDash: [2],
        drawBorder: true,
        borderDashOffset: [2],
        color: "rgba(33, 37, 41, 0.2)",
        zeroLineColor: "rgba(33, 37, 41, 0.15)",
        zeroLineBorderDash: [2],
        zeroLineBorderDashOffset: [2],
      },
    },
    // right: {
    //     beginAtZero: true,
    //     position: "right",
    //     ticks: {
    //         // count: 11,
    //         callback: ((value, index, tick) => {
    //             return value * 100;
    //         })
    //     }
    // }
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};
