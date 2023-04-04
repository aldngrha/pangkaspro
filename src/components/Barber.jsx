import React from "react";
import Button from "./Button.jsx";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Barber() {
  return (
    <motion.div className="container mx-auto my-14">
      <motion.div className="w-[295px] rounded-md bg-white shadow-lg transform transition-all hover:scale-105">
        <div className="p-3">
          <img
            className="w-full h-[253px] rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Headphone"
          />
          <div className="mx-auto flex flex-col gap-2 mt-2">
            <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xl font-semibold">
              Best Headphone
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-md">Rp. 400.000</span>
              <div className="flex items-center justify-between space-x-1">
                <span className="rounded-full bg-green-600 p-1"></span>
                <span className="text-sm text-gray-500">Tersedia</span>
              </div>
            </div>
            <div className="flex space-x-1">
              <BsStarFill className="text-xl text-yellow-400" />
              <BsStarFill className="text-xl text-yellow-400" />
              <BsStarFill className="text-xl text-yellow-400" />
              <BsStarFill className="text-xl text-yellow-400" />
              <BsStarFill className="text-xl text-yellow-400" />
            </div>
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
