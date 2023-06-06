import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpireState } from "./redux.interface";

const initialState: ExpireState = {
  expire: null,
};

export const ExpireSlice = createSlice({
  name: "accessTokenExpire",
  initialState,
  reducers: {
    setExpire(state, action: PayloadAction<Date | null>) {
      state.expire = action.payload;
    },
  },
});

export const { setExpire } = ExpireSlice.actions;
export default ExpireSlice;
