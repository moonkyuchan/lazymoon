import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/Store/Reducers";

type UidType = null | string;

const initialState: UidType = "";

const uidSlice = createSlice({
  name: "uid",
  initialState,
  reducers: {
    setUid: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setUid } = uidSlice.actions;

export const selectUid = (state: RootState) => state.uid;

export default uidSlice.reducer;
