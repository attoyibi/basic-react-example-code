// configureStore.js

// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import store from "redux/store"; // defaults to localStorage for web

// import rootReducer from "./reducers";
import counterSlice from "./slicer/counterSlice";
const persistConfig = {
  key: "counter",
  storage,
  // store,
};

const persistedReducer = persistReducer(persistConfig, counterSlice);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
