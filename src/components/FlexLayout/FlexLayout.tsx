import { FlexLayoutWrapper } from "@/components/FlexLayout/FlexLayoutStyles";
import { TBlog, TBox } from "@/components/FlexLayout/FlexLayoutTypes";
import { AppDispatch, AppRootState, FetchBlogs } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const FlexLayout = () => {
  const { blogs } = useSelector((state: AppRootState) => state.homeState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchBlogs({}));
  }, []);

  return (
    <FlexLayoutWrapper>
      <div className="wrapper">
        <div className="flex-container">
          {blogs.map((box: TBlog, index: Number) => {
            const { title } = box;
            return (
              <div className={`flex-item flex-item-${index}`}>
                {title?.substring(0, 10)}
              </div>
            );
          })}
        </div>
      </div>
    </FlexLayoutWrapper>
  );
};
