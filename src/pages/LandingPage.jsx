import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Barbershop from "../components/Barbershop.jsx";
import Footer from "../components/Footer.jsx";
import GallerySection from "../components/GallerySection.jsx";

export default function () {
  return (
    <>
      <div className="px-4 overflow-hidden">
        <Header />
        <Hero />
        <Barbershop />
        <GallerySection />
        <Footer />
      </div>
    </>
  );
}
