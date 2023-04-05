import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <div className="pt-16">
      <motion.div className="min-w-[400px] min-h-[446px]">
        <img
          className="w-[415px] h-[446px] rounded-xl object-cover pointer-events-none"
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Image"
        />
      </motion.div>
    </div>
  );
}
