import React, { useState } from "react";
import useDetailPageStore from "../stores/useDetailPageStore.jsx";

export default function Counter() {
  const counterValue = useDetailPageStore((state) => state.counterValue);
  const setCounterValue = useDetailPageStore((state) => state.setCounterValue);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };

  const handleDecrement = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
    } else {
      setCounterValue(0);
    }
  };

  return (
    <div className="mt-4 flex items-center">
      <button
        className="px-3 font-bold text-white text-2xl bg-gray-300 rounded-md"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className=" px-5 py-1 bg-gray-50 text-gray-500">
        {counterValue}
      </span>
      <button
        className="px-3 py-0.5 font-bold text-white text-lg bg-secondary rounded-md"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
