import React, { useContext } from "react";
import Input from "./Input.jsx";
import { CartContext } from "../context/CartContext.jsx";

export default function OrderCart() {
  const [showInput] = useContext(CartContext);

  return (
    <div
      className="w-full px-4 py-4 rounded-lg mb-4 md:w-8/12 md:mb-0 bg-white"
      id="shopping-cart"
    >
      <div className="border-b border-gray-200 mb-4 hidden md:block font-poppins font-light">
        <div className="flex flex-start items-center pb-2 -mx-4">
          <div className="px-4 flex-none">
            <div className="" style={{ width: 90 }}>
              <h6>Photo</h6>
            </div>
          </div>
          <div className="px-4 w-5/12">
            <div className="">
              <h6>Barber</h6>
            </div>
          </div>
          <div className="px-4 w-5/12">
            <div className="">
              <h6>Jumlah</h6>
            </div>
          </div>
          <div className="px-4 w-5/12">
            <div className="">
              <h6>Harga</h6>
            </div>
          </div>
          <div className="px-4 w-2/12">
            <div className="text-center">
              <h6>Action</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-xl font-nunito font-bold mb-5">Detail Konsumen</h1>
        <div className="flex flex-col md:flex-row gap-x-6">
          <Input
            forLabel="Nama Lengkap"
            label="Nama Lengkap"
            type="text"
            placeholder="Masukkan nama lengkap"
          />
          <Input
            forLabel="Nomor Handphone"
            label="Nomor Handphone"
            type="text"
            placeholder="Masukkan nomor hp"
          />
          <Input
            forLabel="Alamat"
            label="ALamat"
            type="text"
            placeholder="Masukkan alamat"
          />
        </div>
        <div
          className={`flex flex-col md:flex-row gap-x-6 ${
            showInput ? "opacity-100" : "opacity-0"
          } transition-all duration-500`}
        >
          <Input
            forLabel="Nama Pengirim"
            label="Nama Pengirim"
            type="text"
            placeholder="Masukkan nama pengirim"
          />
          <Input
            forLabel="Asal Bank"
            label="Asal Bank"
            type="text"
            placeholder="Masukkan asal bank"
          />
          <Input forLabel="Bukti Transfer" label="Bukti Transfer" type="file" />
        </div>
      </div>
    </div>
  );
}
