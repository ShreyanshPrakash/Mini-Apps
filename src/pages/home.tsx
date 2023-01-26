import { FC, MouseEvent } from "react";
import styled from "styled-components";
import Link from "next/link";
import { GetServerSideProps, GetStaticProps } from "next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootState } from "@/store";
import { FetchBlogs, UpdateHomeMessage } from "@/store/slices";

const HomeWrapper = styled.div`
  .wrapper {
    /* max-width: 560px; */
    /* margin: auto; */
    display: flex;
    flex-wrap: wrap;
    /* justify-content: flex-start; */

    .blog {
      margin: 24px;
      border: 1px solid black;
      padding: 24px;
      width: 360px;
    }
  }
`;

interface IHomeProps {
  blogs: [];
}

interface IBlog {
  id: number;
  title: string;
  body: string;
  userId: string;
}

const Home: FC<IHomeProps> = (props: IHomeProps) => {
  const { message, apiState, blogs } = useSelector(
    (state: AppRootState) => state.homeState
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleBlogClick = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(UpdateHomeMessage("A new message will be shown now"));
  };

  const handleFetchBlogs = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(FetchBlogs({}));
  };

  return (
    <HomeWrapper>
      <p>{message}</p>
      <p>{apiState}</p>
      <button onClick={handleFetchBlogs}>Fetch Blogs</button>
      <div className="wrapper">
        {blogs.map((item: IBlog) => {
          const { id, title, body, userId } = item;

          return (
            <div className="blog" key={id} onClick={handleBlogClick}>
              <p>User Id : {userId}</p>
              <p>Title : {title}</p>
              <p>Body : {body}</p>
            </div>
          );
        })}
      </div>
    </HomeWrapper>
  );
};

export default Home;

/*
    By default nextjs will statically generate all the pages.
    Incase u need to fetch the data from an api for a page, then use below method.
    Nextjs in this case also, make the call and build the html page during build time itself

*/
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/blog/all");
  const blogs = await res.json();

  return {
    props: { blogs },
    revalidate: 10,
  };
};

// export const getServerSideProps: GetServerSideProps = async () => {
//     const res = await fetch("http://localhost:3000/api/blog/all");
//     const blogs = await res.json();

//     return {
//       props: { blogs },
//     };
//   }
