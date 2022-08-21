//store ini sudah tidak terpakai di gantikan dengan configurate store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slicer/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
