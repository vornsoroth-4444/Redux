import { configureStore } from "@reduxjs/toolkit";
import counter from "../lib/feature/counter/counterSlice";
import product from "../lib/feature/product/productSlice";
import { ecommerceApi } from "./api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter,
      product,
      [ecommerceApi.reducerPath]: ecommerceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ecommerceApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
