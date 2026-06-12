import { configureStore } from "@reduxjs/toolkit";
import counter from "../lib/feature/counter/counterSlice";
import product from "../lib/feature/product/productSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter,
      product,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
