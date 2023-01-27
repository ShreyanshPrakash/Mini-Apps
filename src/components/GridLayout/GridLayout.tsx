import { GridLayoutWrapper } from "@/components/GridLayout/GridLayoutStyles";
import { IGridLayoutProps } from "@/components/GridLayout/GridLayoutTypes";
import { AppDispatch, AppRootState, FetchBlogs } from "@/store";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const GridLayout: FC<IGridLayoutProps> = () => {
  const { blogs } = useSelector((state: AppRootState) => state.homeState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchBlogs({}));
  }, []);

  return (
    <GridLayoutWrapper>
      <div className="wrapper"></div>
    </GridLayoutWrapper>
  );
};
