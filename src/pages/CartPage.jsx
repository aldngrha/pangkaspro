import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import OrderCart from "../components/OrderCart.jsx";
import OrderDetail from "../components/OrderDetail.jsx";
import { CartProvider } from "../context/CartContext.jsx";

export default function CartPage() {
  return (
    <>
      <div className="px-4 overflow-hidden">
        <Header />
        <Breadcrumb
          list={[
            { url: "/", name: "Home" },
            { url: "/cart", name: "Cart" },
          ]}
        />
        <CartProvider>
          <section className="md:pb-16">
            <div className="container mx-auto px-4">
              <div className="flex -mx-4 flex-wrap justify-between">
                <OrderCart />
                <OrderDetail />
              </div>
            </div>
          </section>
        </CartProvider>
        <Footer />
      </div>
    </>
  );
}
