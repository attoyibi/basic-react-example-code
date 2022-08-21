// configureStore.js
import { createStore } from "redux"; // memang sudah tidak baik menggunakan redux biasa.
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import store from "redux/store"; // defaults to localStorage for web

// import rootReducer from "./reducers";
import counterSlice from "./slicer/counterSlice";
const persistConfig = {
  key: "counter", //sebagai penentuan key yang akan disimpan di local storage
  storage, // isi dari local storage yang akan digunakan
  // store,
};

const persistedReducer = persistReducer(persistConfig, counterSlice);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
