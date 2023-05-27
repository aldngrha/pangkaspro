import React from "react";
import { BsStarFill } from "react-icons/bs";
import propTypes from "prop-types";

export default function Star({ value }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < value) {
      stars.push(<BsStarFill key={i} className="text-xl text-yellow-400" />);
    } else {
      stars.push(<BsStarFill key={i} className="text-xl text-gray-200" />);
    }
  }

  return <div className="flex space-x-1">{stars}</div>;
}

Star.propTypes = {
  value: propTypes.number,
};
