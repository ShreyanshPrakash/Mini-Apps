import { Data } from "@/components/Dashboards/CountDashboardConfig";
import { CountDashboardWrapper } from "@/components/Dashboards/CountDashboardStyles";
import {
  ICountDashboardProps,
  TData,
} from "@/components/Dashboards/DashboardsTypes";
import { FC } from "react";

export const CountDashboard: FC<ICountDashboardProps> = (
  props: ICountDashboardProps
) => {
  return (
    <CountDashboardWrapper>
      <div className="grid-container">
        {Data.map((item: TData, index: number) => {
          const { title, value } = item;

          return (
            <div className={`grid-item grid-item-${index + 1}`} key={index}>
              <p className="grid-item-title">{title}</p>
              <p className="grid-item-value">{value}</p>
              {/* <p>{index + 1}</p> */}
            </div>
          );
        })}
      </div>
    </CountDashboardWrapper>
  );
};
