import styled from "styled-components";

export const GridLayoutWrapper = styled.div`

    .wrapper {

        .grid-container {

            border: 4px solid darkblue;
            margin: 0px 24px 24px;
            padding: 24px;

            display: grid;
            grid-gap: 16px;

            /* grid-template-rows: repeat(12, 1fr); */
            grid-auto-rows: minmax(100px, auto);
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            grid-template-columns: repeat(auto-fit, 360px);
            justify-content: center;


            .grid-item {
                border: 2px solid darkorange;
                padding: 8px;
                display: flex;
                align-items: center;
                justify-content: center;

            }
        }
    }

`;
