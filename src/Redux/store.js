import { configureStore } from "@reduxjs/toolkit";
import { contentReducer } from "./Data/data.reducer";

export default configureStore({
  reducer: {
    content: contentReducer,
  },
});
