import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    SideBar: (state) => {
      if (state.isSideBarOpen) state.isSideBarOpen = false;
      else state.isSideBarOpen = true;
    },
    CloseSideBar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export const { SideBar, CloseSideBar } = appSlice.actions;

export default appSlice.reducer;
