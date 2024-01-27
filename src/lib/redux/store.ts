import { configureStore } from "@reduxjs/toolkit";
import rankSlice from "./slices/rank";

export const store = configureStore({
  reducer: {
    rank: rankSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
