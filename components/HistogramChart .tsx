import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { IComputer } from "../types";
import { IContext, Context } from "../context/state";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface HistogramChartProps {
  currentCategory: string;
}
export const HistogramChart: React.FC<HistogramChartProps> = ({
  currentCategory,
}) => {
  const { listOfComputers } = useContext<IContext>(Context);
  const names = listOfComputers.map((computer) => computer.name);
  const categoty = listOfComputers.map(
    (computer) => computer[currentCategory as keyof IComputer]
  );
  const data = {
    labels: names,
    datasets: [
      {
        label: currentCategory,
        data: categoty,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(201, 203, 207)",
        ],
      },
    ],
  };
  return (
    <div>
      <Bar width={"852px"} height={"425px"} data={data} />
    </div>
  );
};
