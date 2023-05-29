import React, { useContext } from "react";
import Input from "./Input.jsx";
import { CartContext } from "../context/CartContext.jsx";
import useCheckoutStore from "../stores/useCheckoutStore.jsx";
import useDetailPageStore from "../stores/useDetailPageStore.jsx";

export default function OrderCart() {
  const detailProduct = useCheckoutStore(
    (state) => state.selectedProductDetail
  );
  const selectedKapster = useCheckoutStore((state) => state.selectedKapster);
  const counterValue = useDetailPageStore((state) => state.counterValue);
  const [showInput] = useContext(CartContext);

  console.log(detailProduct);
  console.log(selectedKapster);

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
              <h6>Barbershop</h6>
            </div>
          </div>
          <div className="px-4 w-5/12">
            <div className="">
              <h6>Kapster</h6>
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
      {detailProduct && selectedKapster === null ? (
        <p id="cart-empty" className="text-center py-8">
          Ooops... Cart is empty{" "}
          <Link to="/" className="underline">
            Shop Now
          </Link>
        </p>
      ) : (
        <div className="flex flex-start flex-wrap items-center mb-4 -mx-4">
          <div className="px-4 flex-none">
            <div className="" style={{ width: 90, height: 90 }}>
              <img
                src={`http://localhost:9000/${detailProduct.image.imageUrl}`}
                alt={detailProduct.name}
                className="object-cover rounded-xl w-full h-full"
              />
            </div>
          </div>
          <div className="px-4 w-auto flex-1 md:w-5/12">
            <div className="">
              <span className="text-base font-semibold md:text-lg">
                {detailProduct.name}
              </span>
              <h6 className="text-sm md:text-lg block md:hidden">
                {selectedKapster.name}
              </h6>
              <h6 className="text-sm md:text-lg block md:hidden">
                {counterValue}
              </h6>
              <h6 className="text-sm md:text-lg block md:hidden">
                Rp{detailProduct.price.toLocaleString("id-ID")}
              </h6>
            </div>
          </div>
          <div className="px-4 w-auto flex-none md:flex-1 md:w-4/12 hidden md:block">
            <div className="">
              <h6 className="text-lg">{selectedKapster.name}</h6>
            </div>
          </div>
          <div className="px-4 w-auto flex-none md:flex-1 md:w-4/12 hidden md:block">
            <div className="">
              <h6 className="text-lg">{counterValue}</h6>
            </div>
          </div>
          <div className="px-4 w-auto flex-none md:flex-1 md:w-4/12 hidden md:block">
            <div className="">
              <h6 className="text-lg">
                Rp{detailProduct.price.toLocaleString("id-ID")}
              </h6>
            </div>
          </div>
          <div className="px-4 w-1/12 -ml-3 pr-20">
            <div className="text-center">
              <button className="text-red-600 border-none focus:outline-none px-3 py-1">
                X
              </button>
            </div>
          </div>
        </div>
      )}
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
