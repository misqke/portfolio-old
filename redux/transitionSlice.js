import { createSlice } from "@reduxjs/toolkit";

const transitionSlice = createSlice({
  name: "transition",
  initialState: { active: true },
  reducers: {
    activate: (state) => {
      state.active = true;
    },
    deactivate: (state) => {
      state.active = false;
    },
  },
});

export default transitionSlice.reducer;
export const { activate, deactivate } = transitionSlice.actions;
