import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/Store/Reducers";

interface SidebarState {
  active: number;
  isOpen: boolean;
}

const initialState: SidebarState = {
  active: 1,
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<number>) => {
      state.active = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setActive, setIsOpen } = sidebarSlice.actions;

export const selectSidebarActive = (state: RootState) => state.sidebar.active;
export const selectSidebarIsOpen = (state: RootState) => state.sidebar.isOpen;

export default sidebarSlice.reducer;
