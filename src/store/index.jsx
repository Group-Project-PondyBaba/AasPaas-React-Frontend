import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authReducer } from "./slices/authSlice";

export const store = configureStore({
  reducer: { auth: authReducer },
});

setupListeners(store.dispatch);

// export * from "./thunks/login";