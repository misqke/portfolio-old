import { configureStore } from "@reduxjs/toolkit";

import TransitionReducer from "./transitionSlice";

const store = configureStore({
  reducer: {
    transition: TransitionReducer,
  },
});

export default store;
