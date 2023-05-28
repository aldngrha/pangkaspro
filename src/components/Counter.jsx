import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      setCount(0);
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
      <span className=" px-5 py-1 bg-gray-50 text-gray-500">{count}</span>
      <button
        className="px-3 py-0.5 font-bold text-white text-lg bg-secondary rounded-md"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
