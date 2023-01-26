import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

interface IBlog {
    id: number;
    title: string;
    body: string;
    userId: string;
  }

interface IInitialState {
  message: string;
  apiState: string;
  blogs: Array<IBlog>;
}

const HomeInitialState: IInitialState = {
  message: "Welcome to home page. Please browse all the blogs!",
  apiState: "IDLE",
  blogs: [],
};

const reducers = {
  UpdateHomeMessage: (
    state = HomeInitialState,
    action: PayloadAction<any, string>
  ) => {
    const timeStamp = new Date().toDateString();
    state.message = `${timeStamp} : ${action.payload} : ${Math.random()}`;
  },
};

export const FetchBlogs = createAsyncThunk(
  "homeslice/fetchBlogs",
  async (payload: any) => {
    const res = await fetch("http://localhost:3000/api/blog/all");
    const blogs = await res.json();

    console.log(blogs);

    return blogs;
  }
);

const extraReducers = (builder: ActionReducerMapBuilder<IInitialState>) => {
  builder
    .addCase(
      FetchBlogs.pending,
      (
        state: IInitialState = HomeInitialState,
        action: PayloadAction<any, string>
      ) => {
        state.apiState = "IN-PROGRESS";
      }
    )
    .addCase(
      FetchBlogs.fulfilled,
      (
        state: IInitialState = HomeInitialState,
        action: PayloadAction<any, string>
      ) => {
        state.apiState = "SUCCESSFUL";
        state.blogs = action.payload;
      }
    )
    .addCase(
      FetchBlogs.rejected,
      (
        state: IInitialState = HomeInitialState,
        action: PayloadAction<any, string>
      ) => {
        state.apiState = "FAILED";
      }
    );
};

export const HomeSlice = createSlice({
  name: "homeSlcie",
  initialState: HomeInitialState,
  reducers: reducers,
  extraReducers: extraReducers,
});


export const { UpdateHomeMessage } = HomeSlice.actions;
