import styled from "styled-components";

export const FlexLayoutWrapper = styled.div`
  .wrapper {
    .flex-container {
      border: 4px solid darkblue;
      margin: 0px 24px;
      padding: 24px;

      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: space-around;

      .flex-item {
        width: 200px;
        height: 100px;
        border: 2px solid darkorange;
        display: flex;
        align-items: center;
        justify-content: center;

        flex-grow: 1;
        max-width: 200px;
      }
    }
  }
`;
