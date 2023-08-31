import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./couter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export const counterActions = counterReducer.actions;

export default store;
