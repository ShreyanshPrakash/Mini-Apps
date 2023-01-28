import { Chart, ChartProps } from "react-chartjs-2";
import "chart.js/auto";
import { FC, ReactElement } from "react";

export const CustomChart: FC<ChartProps> = (
  props: ChartProps
): ReactElement => {
  return <Chart {...props} />;
};
