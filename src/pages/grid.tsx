import { GridLayout } from "@/components";
import { GetStaticProps } from "next";
import styled from "styled-components";

const GridWrapper = styled.div`
  .wrapper {
    h1 {
      text-align: center;
      margin: 24px;
    }
  }
`;

const Grid = (props: any) => {
  return (
    <GridWrapper>
      <div className="wrapper">
        <h1>Grid layout is awesome!</h1>
        <GridLayout blogs={props?.blogs || []}/>
      </div>
    </GridWrapper>
  );
};

export default Grid;


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
