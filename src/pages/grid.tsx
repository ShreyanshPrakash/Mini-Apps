import { GridLayout } from "@/components";
import styled from "styled-components";


const GridWrapper = styled.div`
    .wrapper {
        h1 {
            text-align: center;
            margin: 24px;
        }
    }
`;


const Grid = () => {

    return (
        <GridWrapper>
            <div className="wrapper">
                <h1>Grid layout is awesome!</h1>
                <GridLayout />
            </div>
        </GridWrapper>
    )

}


export default Grid;