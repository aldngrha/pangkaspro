import React from "react";

export default function Input({ forLabel, label, type, placeholder, margin }) {
  return (
    <div className={`flex flex-col ${margin} py-4`}>
      <label htmlFor={forLabel} className="mb-2 font-poppins font-medium">
        {label}
      </label>
      <input
        type={type}
        className="py-2 bg-[#FAFAFA] px-4 rounded-lg font-poppins focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
