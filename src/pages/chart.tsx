import { ChartComponent } from "@/components";
import styled from "styled-components";

const ChartWrapper = styled.div`
  .wrapper h1 {
    text-align: center;
    margin: 24px 0px;
  }
`;

const Chart = () => {
  return (
    <ChartWrapper>
      <div className="wrapper">
        <h1>Welcome to ChartJS!</h1>
        <ChartComponent />
      </div>
    </ChartWrapper>
  );
};

export default Chart;
