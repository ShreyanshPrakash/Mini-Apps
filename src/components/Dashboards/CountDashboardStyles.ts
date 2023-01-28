import styled from "styled-components";

export const CountDashboardWrapper = styled.div`
  .grid-container {
    /* margin: 24px; */
    border: 4px solid darkblue;
    height: calc(100vh - 43px);

    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    /* grid-auto-rows: minmax(200px, auto); */

    .grid-item {
      background-color: darkorange;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .grid-item:nth-child(6){
        grid-column: span 2;
        grid-row: span 2;
        grid
    }
  }
`;
