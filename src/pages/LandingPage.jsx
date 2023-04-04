import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Barbershop from "../components/Barbershop.jsx";

export default function () {
  return (
    <>
      <div className="px-4 overflow-hidden">
        <Header />
        <Hero />
        <Barbershop />
      </div>
    </>
  );
}
