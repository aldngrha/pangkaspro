import React from "react";

export default function Stats({ number, text, text2 }) {
  return (
    <div className="flex flex-col">
      <p className="text-black text-4xl lg:text-5xl font-bold font-poppins">
        {number}
        <span className="text-secondary font-light">+</span>
      </p>
      <p className="text-xl lg:text-2xl font-light text-gray-400 pt-2 pr-3">
        {text} <br /> {text2}
      </p>
    </div>
  );
}
