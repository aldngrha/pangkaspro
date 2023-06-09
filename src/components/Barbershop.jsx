import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button.jsx";
import Barber from "./Barber.jsx";
import useLandingPageStore from "../stores/useLandingPageStore.jsx";

export default function Barbershop() {
  const data = useLandingPageStore((state) => state.dataApi);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="container mx-auto py-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[28px] font-nunito font-semibold">
          Our Barbershop
        </h2>
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
          {data &&
            data.barbershop.map((barber) => (
              <Barber key={barber._id} barber={barber} />
            ))}
        </motion.div>
      </motion.div>
      <div className="flex justify-center -mt-5">
        <Button
          type="link"
          to="/barbershop"
          text="View More"
          color="text-secondary border border-secondary inline lg:hidden"
        />
      </div>
    </section>
  );
}
