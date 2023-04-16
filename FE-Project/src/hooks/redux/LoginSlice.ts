import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState{
    token :string | null;
}

const initialState: CommonState = {
    token: null
}

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
export default LoginSlice