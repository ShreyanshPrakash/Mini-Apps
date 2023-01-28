import { BarChartdata, BarChartOptions } from "@/components/Chart/ChartData";
import { ChartComponnentWrapper } from "@/components/Chart/ChartStyles";
import { IChartComponentProps } from "@/components/Chart/ChartTypes";
import { FC } from "react";
import { CustomChart } from "@/components/Chart/Chart";

export const ChartComponent: FC<IChartComponentProps> = () => {
  return (
    <ChartComponnentWrapper>
      <div className="chart-wrapper">
        <div className="bar-chart">
          <CustomChart
            type="bar"
            data={BarChartdata}
            options={BarChartOptions}
            width="200px"
            height="200px"
          />
        </div>
      </div>
    </ChartComponnentWrapper>
  );
};
