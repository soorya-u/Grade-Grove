import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

export const rankSlice = createSlice({
  initialState,
  name: "Student Rank",
  reducers: {
    setRank: (_, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { setRank } = rankSlice.actions;
export default rankSlice.reducer;
