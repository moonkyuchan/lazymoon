import { combineReducers } from "@reduxjs/toolkit";
import reducers from "../Slice";

export const RootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof RootReducer>;
