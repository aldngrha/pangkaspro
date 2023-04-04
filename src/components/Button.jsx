import React from "react";
import { Link } from "react-router-dom";

const Button = ({ type, to, onClick, color, text }) => {
  if (type === "link") {
    return (
      <Link
        to={to}
        className={`px-8 py-2 font-poppins cursor-pointer ${color} rounded-lg font-semibold`}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-2 font-poppins cursor-pointer ${color} rounded-lg font-semibold`}
      >
        {text}
      </button>
    );
  }
};

export default Button;
