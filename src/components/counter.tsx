"use client";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {
  decrement,
  increment,
  reset,
} from "../lib/feature/counter/counterSlice";

export function CounterComponents() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
          <h1 className="text-black text-3xl font-bold m-5 ">Conter</h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">{count}</h2>

          <div className="flex gap-4">
            <button
              onClick={() => dispatch(increment())}
              className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition"
            >
              Increment
            </button>

            <button
              onClick={() => dispatch(decrement())}
              className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow transition"
            >
              Decrement
            </button>

            <button
              onClick={() => dispatch(reset())}
              className="px-5 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
