import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import Button from "./Button.jsx";
import useCheckoutStore from "../stores/useCheckoutStore.jsx";
import useDetailPageStore from "../stores/useDetailPageStore.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function OrderDetail() {
  const detailProduct = useCheckoutStore(
    (state) => state.selectedProductDetail
  );
  const selectedKapster = useCheckoutStore((state) => state.selectedKapster);
  const counterValue = useDetailPageStore((state) => state.counterValue);
  const form = useCheckoutStore((state) => state.form);
  const [activeTab, setActiveTab] = useState();
  const [showInput, setShowInput] = useContext(CartContext);
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const apiVersion = "api/v1";

  console.log(detailProduct);
  console.log(selectedKapster);

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

  const token = Cookies.get("token");

  const handleCheckout = async () => {
    try {
      const formData = new FormData();
      formData.append("image", form.image);
      formData.append("name", form.name);
      formData.append("phoneNumber", form.phoneNumber);
      formData.append("address", form.address);
      formData.append("accountHolder", form.accountHolder);
      formData.append("bankName", form.bankName);
      formData.append("barberId", detailProduct.id);
      formData.append("kapsterId", selectedKapster._id);
      formData.append("quantity", counterValue);
      formData.append(
        "paymentMethod",
        activeTab === 0 ? "Transfer" : "Bayar ditempat"
      );

      const response = await axios.post(
        `${apiUrl}/${apiVersion}/transaction`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Token JWT yang telah diterima saat login
          },
        }
      );
      console.log(response);
      navigate("/success");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Internal server error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <section className="w-full px-4 py-3 md:px-6 md:w-3/12 bg-white rounded-lg lg:mr-20 font-poppins">
      <div className="pt-6">
        <h1 className="text-lg font-bold font-nunito">Informasi Pembayaran</h1>
        <div className="flex justify-between font-light py-6">
          <ul className="flex flex-col gap-y-3">
            <li>Harga</li>
            <li>Potongan</li>
            <li>Biaya Perjalanan</li>
          </ul>
          <ul className="flex flex-col gap-y-3">
            <li>Rp{detailProduct.price.toLocaleString("id-ID")}</li>
            <li>0%</li>
            <li>Rp{detailProduct.shippingCost.toLocaleString("id-ID")}</li>
          </ul>
        </div>
        <hr />
        <ul className="flex justify-between pt-3">
          <li className="font-semibold">Total Harga</li>
          <li className="font-semibold">
            Rp
            {(
              detailProduct.price * counterValue +
              detailProduct.shippingCost
            ).toLocaleString("id-ID")}
          </li>
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
              <li>Bank/E-Wallet</li>
              <li>No Rek/No Hp</li>
            </ul>
            <ul className="flex flex-col gap-y-3">
              <li>{detailProduct.accountName}</li>
              <li>{detailProduct.bank}</li>
              <li>{detailProduct.accountNumber}</li>
            </ul>
          </div>
        </div>
        <Button
          onClick={handleCheckout}
          text="Checkout sekarang"
          color={`${
            showInput ? "mt-5" : ""
          } text-white bg-secondary hover:bg-secondary-hover`}
        />
      </div>
    </section>
  );
}
