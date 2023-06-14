import React from "react";
import { motion } from "framer-motion";

export default function Gallery({ gallery }) {
  const { imageUrl } = gallery;
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  // Buat URL lengkap untuk gambar
  const images = `${apiUrl}/${imageUrl}`;

  return (
    <div className="pt-16">
      <motion.div className="min-w-[400px] min-h-[446px]">
        <img
          className="w-[415px] h-[446px] rounded-xl object-cover pointer-events-none"
          src={images}
          alt="Image"
        />
      </motion.div>
    </div>
  );
}
