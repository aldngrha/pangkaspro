import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import useRatingStore from "../stores/useRatingStore.jsx";

const StarRating = () => {
  const rating = useRatingStore((state) => state.selectedRating);
  const setRating = useRatingStore((state) => state.setSelectedRating);
  const [hover, setHover] = useState(null);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleRatingHover = (value) => {
    setHover(value);
  };

  return (
    <div className="flex items-center space-x-2">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={starValue} className="cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => handleRatingClick(starValue)}
              className="hidden"
            />
            <FaStar
              className={`star text-yellow-400 ${
                starValue <= (hover || rating)
                  ? "fill-current"
                  : "fill-current text-gray-300"
              }`}
              size={50}
              onMouseEnter={() => handleRatingHover(starValue)}
              onMouseLeave={() => handleRatingHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
