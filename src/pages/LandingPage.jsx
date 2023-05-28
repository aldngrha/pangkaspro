import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Barbershop from "../components/Barbershop.jsx";
import Footer from "../components/Footer.jsx";
import GallerySection from "../components/GallerySection.jsx";
import useLandingPageStore from "../stores/useLandingPageStore.jsx";

export default function () {
  const fetchData = useLandingPageStore((state) => state.fetchData);

  const apiUrl = "http://localhost:9000";
  const apiVersion = "api/v1";

  useEffect(() => {
    fetchData(`${apiUrl}/${apiVersion}/landing-page`);
  }, []);

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
