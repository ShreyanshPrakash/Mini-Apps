import { FlexLayout } from "@/components";
import styled from "styled-components";

const FlexWrapper = styled.div`
  .wrapper {
    h1 {
      text-align: center;
      padding: 24px 0px;
    }
  }
`;

const Flex = () => {
  return (
    <FlexWrapper>
      <div className="wrapper">
        <h1>Flex layout is awesome!</h1>
        <FlexLayout />
      </div>
    </FlexWrapper>
  );
};

export default Flex;
