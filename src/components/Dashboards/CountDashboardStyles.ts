import { Data } from "@/components/Dashboards/CountDashboardConfig";
import { TData } from "@/components/Dashboards/DashboardsTypes";
import styled from "styled-components";

const getGridChildrenStyles = (data: Array<TData>): string => {
  let gridItemStyles = "";
  let gridContainerStyles = "";

  for (let i = 0; i < data.length; i++) {
    gridItemStyles += `
            .grid-item-${i + 1}{
                grid-area: ${data?.[i].gridName};
                animation-delay: ${(i + 1) * 100}ms;
            }
        `;
  }

  gridContainerStyles += `
        .grid-container{
            grid-template-areas:
                'one two three four'
                'twelve thirteen thirteen five'
                'eleven thirteen thirteen six'
                'ten nine eight seven';

            ${gridItemStyles}
        }
    `;

  return gridContainerStyles;
};

export const CountDashboardWrapper = styled.div<{}>`
  .grid-container {
    border: 4px solid darkblue;
    height: calc(100vh - 43px);

    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(4, minmax(200px, 1fr));

    .grid-item {
      background-color: darkorange;

      display: flex;
      justify-content: center;
      align-items: center;

      animation: cardEntrance 700ms ease-out;
      animation-fill-mode: backwards;
    }
  }

  @keyframes cardEntrance {
    from {
      opacity: 0;
      transform: scale(0.3);
      filter: hue-rotate(180deg);
    }
    to {
      opacity: 1;
      transform: scale(1);
      filter: hue-rotate(0deg);
    }
  }

  ${getGridChildrenStyles(Data)}
`;
