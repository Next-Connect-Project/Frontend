import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createLogger } from "redux-logger";
import LoginSlice from "./LoginSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ExpireSlice from "./ExpireSlice";

//상태추가 할것 추가
const reducers = combineReducers({
  login: LoginSlice.reducer,
  expire: ExpireSlice.reducer,
});

const logger = createLogger();
const initialState = {};

//redux를 localstorage에 저장해 새로 고침시 redux 상태가 증발하는것을 방지
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "expire"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

//https://freestrokes.tistory.com/161
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
