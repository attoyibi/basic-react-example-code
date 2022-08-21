//store ini sudah tidak terpakai
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slicer/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
