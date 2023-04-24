import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenState } from "./redux.interface";

const initialState: TokenState = {
  token: null,
};

export const LoginSlice = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        }
    }
});

export const { setToken } = LoginSlice.actions;
export default LoginSlice;