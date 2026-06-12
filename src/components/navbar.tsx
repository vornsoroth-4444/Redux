"use client";

import { useAppSelector } from "../lib/hooks";

export default function NavbarComponent() {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <h2 className="bg-gray-500 text-gray-400 font-bold text-4xl text-center">
      {count}
    </h2>
  );
}
