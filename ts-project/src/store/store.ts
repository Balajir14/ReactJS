import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import registerReducer from "./registerSlice";
import crudReducer from "./crudSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
    crud: crudReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // used to read the data from store
export type AppDispatch = typeof store.dispatch; // used to save the data into the redux store.
export default store;
