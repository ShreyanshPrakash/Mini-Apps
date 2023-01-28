import { CountDashboard } from "@/components";
import styled from "styled-components";

const DashboardWrapper = styled.div``;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <div className="wrapper">
        <CountDashboard />
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
