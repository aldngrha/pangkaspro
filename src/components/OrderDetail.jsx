import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import Button from "./Button.jsx";

export default function OrderDetail() {
  const [activeTab, setActiveTab] = useState();
  const [showInput, setShowInput] = useContext(CartContext);

  const handleButtonClick = (id) => {
    if (id === 0) {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const tabs = [
    { id: 0, title: "Transfer" },
    { id: 1, title: "Bayar ditempat" },
  ];
  return (
    <section className="w-full px-4 py-3 md:px-6 md:w-3/12 bg-white rounded-lg lg:mr-20 font-poppins">
      <div className="pt-6">
        <h1 className="text-lg font-bold font-nunito">Informasi Pembayaran</h1>
        <div className="flex justify-between font-light py-6">
          <ul className="flex flex-col gap-y-3">
            <li>Harga</li>
            <li>Potongan</li>
            <li>Pajak</li>
          </ul>
          <ul className="flex flex-col gap-y-3">
            <li>Rp140.000</li>
            <li>0%</li>
            <li>10%</li>
          </ul>
        </div>
        <hr />
        <ul className="flex justify-between pt-3">
          <li className="font-semibold">Total Harga</li>
          <li className="font-semibold">Rp154.000</li>
        </ul>
      </div>
      <div className="max-w-xl">
        <div className="py-3">
          <nav
            className="flex justify-between cursor-pointer"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <a
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "border-secondary text-secondary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-md`}
                onClick={() => {
                  setActiveTab(tab.id);
                  handleButtonClick(tab.id);
                }}
              >
                {tab.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-col py-6">
        <div
          className={`${
            showInput ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
          } transition-all duration-500 ease-in-out`}
          style={{ pointerEvents: showInput ? "auto" : "none" }}
        >
          <h1 className="text-lg font-bold font-nunito">Transfer Pembayaran</h1>
          <div className="flex justify-between font-light py-6">
            <ul className="flex flex-col gap-y-3">
              <li>Nama Akun</li>
              <li>Platform</li>
              <li>Nomor VA</li>
            </ul>
            <ul className="flex flex-col gap-y-3">
              <li>Aldi Nugraha</li>
              <li>DANA</li>
              <li>8098982973812</li>
            </ul>
          </div>
        </div>
        <Button
          onClick=""
          text="Checkout sekarang"
          color={`${
            showInput ? "mt-5" : ""
          } text-white bg-secondary hover:bg-secondary-hover`}
        />
      </div>
    </section>
  );
}
