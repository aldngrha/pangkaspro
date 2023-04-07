import React from "react";
import Button from "../components/Button.jsx";

export default function SuccessPage() {
  return (
    <section className="container mx-auto py-4 px-10">
      <div className="flex flex-col items-center justify-center">
        <img src="/assets/images/Logo.svg" alt="Logo" className="mb-10" />
        <h1 className="text-3xl font-nunito font-black">Yay! Berhasil</h1>
        <img
          src="/assets/images/success.svg"
          alt="Success"
          className="mt-10 h-[242px]"
        />
        <p className="text-center text-sm lg:text-md text-gray-400 font-light mt-6 font-poppins">
          Pesananmu berhasil, kapster akan menuju <br />
          rumahmu sebentar lagi, ditunggu yaa!
        </p>
        <Button
          type="link"
          to="/"
          text="Kembali ke Home"
          color="mt-10 text-white bg-secondary hover:bg-secondary-hover"
        />
      </div>
    </section>
  );
}
