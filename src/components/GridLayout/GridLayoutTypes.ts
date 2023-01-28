
export type TBlog = {
    id: number;
    title: string;
    body: string;
    userId: string;
  };

export interface IGridLayoutProps {
    blogs: Array<TBlog>,
}