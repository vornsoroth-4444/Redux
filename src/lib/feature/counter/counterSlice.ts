import { createSlice } from "@reduxjs/toolkit";

export type CounterType = {
  value: number;
};
// initalstate
const initialState: CounterType = {
  value: 0,
};
// createSlice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
