import { TBlog } from "@/components/FlexLayout/FlexLayoutTypes";
import { GridLayoutWrapper } from "@/components/GridLayout/GridLayoutStyles";
import { IGridLayoutProps } from "@/components/GridLayout/GridLayoutTypes";
import { FC } from "react";

export const GridLayout: FC<IGridLayoutProps> = (props: IGridLayoutProps) => {
  return (
    <GridLayoutWrapper>
      <div className="wrapper">
        <div className="grid-container">
          {props?.blogs?.map((blog: TBlog, index: Number) => {
            const { body, title, id } = blog;
            return (
              <div className={`grid-item grid-item-${index}`} key={id}>
                {body.substring(0, 20000)}
              </div>
            );
          })}
        </div>
      </div>
    </GridLayoutWrapper>
  );
};
