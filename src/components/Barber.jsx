import React from "react";
import Button from "./Button.jsx";
import { BsHeart, BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Star from "./Star.jsx";

export default function Barber({ barber }) {
  const { imageId, name, price, rating } = barber;
  const image = imageId[0];
  // Buat URL lengkap untuk gambar
  const imageUrl = `http://localhost:9000/${image.imageUrl}`;
  return (
    <motion.div className="container mx-auto my-14">
      <motion.div className="w-[295px] rounded-md bg-white">
        <div className="p-3">
          <img
            className="w-full h-[253px] rounded-lg object-cover pointer-events-none"
            src={imageUrl}
            alt="Headphone"
          />
          <div className="mx-auto flex flex-col gap-2 mt-2">
            <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xl font-semibold">
              {name}
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-md">Rp{price.toLocaleString()}</span>
              <button>
                <BsHeart className="text-xl" />
              </button>
            </div>
            <Star value={rating} />
            <div className="flex items-center justify-between mt-1">
              <Button
                type="link"
                text="Pesan"
                color="bg-secondary text-white hover:bg-secondary-hover"
              />
              <Button
                type="link"
                text="View More"
                color="text-secondary hover:text-secondary-hover font-light"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
