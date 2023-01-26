import { rootReducer } from "@/store/slices";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
});



/*
 infer types based on the state and dispatch
 This will be used in the selectors state, and anywhere u want to use state
*/
export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   AppRootState,
   unknown,
   Action<string>
 >;
