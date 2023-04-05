import React, { useEffect, useRef, useState } from "react";
import Button from "./Button.jsx";
import Gallery from "./Gallery.jsx";
import { motion } from "framer-motion";

export default function GallerySection() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="container mx-auto py-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[28px] font-nunito font-semibold">Our Gallery</h2>
        <Button
          type="link"
          to="/barbershop"
          text="View More"
          color="text-secondary border border-secondary hidden lg:inline"
        />
      </div>
      <motion.div
        ref={carousel}
        className="overflow-hidden cursor-grab "
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-x-5 lg:gap-x-7 z-1"
        >
          <Gallery />
          <Gallery />
          <Gallery />
        </motion.div>
      </motion.div>
    </section>
  );
}
