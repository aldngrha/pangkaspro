import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import ProductDetail from "../components/ProductDetail.jsx";
import KapsterList from "../components/KapsterList.jsx";

export default function DetailPage() {
  return (
    <>
      <div className="px-4 overflow-hidden">
        <Header />
        <Breadcrumb
          list={[
            { url: "/", name: "Home" },
            { url: "/detail", name: "Barber Detail" },
          ]}
        />
        <ProductDetail />
        <KapsterList />
        <Footer />
      </div>
    </>
  );
}
