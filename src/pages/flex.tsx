import { FlexLayout } from "@/components";
import { GetStaticProps } from "next";
import styled from "styled-components";

const FlexWrapper = styled.div`
  .wrapper {
    h1 {
      text-align: center;
      padding: 24px 0px;
    }
  }
`;

const Flex = (props: any) => {
  return (
    <FlexWrapper>
      <div className="wrapper">
        <h1>Flex layout is awesome!</h1>
        <FlexLayout blogs={props?.blogs || []}/>
      </div>
    </FlexWrapper>
  );
};

export default Flex;


export const getStaticProps: GetStaticProps = async () => {

  let blogs = [];
  try {
    const res = await fetch("http://localhost:3200/api/blog/all");
    blogs = await res.json();
  }catch(error){
    console.log(error);
  }

  return {
    props: {
      blogs,
    }
  }
}
