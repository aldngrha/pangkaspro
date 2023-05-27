import React from "react";

export default function Input({
  forLabel,
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  margin,
  animate,
}) {
  if (type === "file") {
    return (
      <div className={`flex flex-col ${margin} py-4`}>
        <label htmlFor={forLabel} className="mb-2 font-poppins font-medium">
          {label}
        </label>
        <input
          type={type}
          name={name}
          className="block w-full text-sm text-gray-400
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-orange-50 file:text-secondary
                        hover:file:bg-orange-100 focus:outline-none font-poppins"
          onAnimationEnd={animate}
        />
      </div>
    );
  } else {
    return (
      <div className={`flex flex-col ${margin} py-4`}>
        <label htmlFor={forLabel} className="mb-2 font-poppins font-medium">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="py-2 bg-[#FAFAFA] px-4 rounded-lg font-poppins focus:outline-none"
          placeholder={placeholder}
          onAnimationEnd={animate}
        />
      </div>
    );
  }
}
