import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function NotFoundPage({
  title = "NOT FOUND",
  body = "Yang kamu cari tidak ditemukan",
}) {
  return (
    <section className="container mx-auto py-4 px-10">
      <div className="flex flex-col items-center justify-center">
        <img src="/assets/images/Logo.svg" alt="Logo" className="mb-10" />
        <img
          src="/assets/images/not.svg"
          alt="Not found"
          className="h-[250px] mb-6"
        />
        <div className="w-full md:w-4/12 text-center">
          <h2 className="text-3xl font-bold mb-6 font-nunito">{title}</h2>
          <p className="text-lg mb-12 font-light text-gray-400 font-poppins">
            {body}
          </p>
          <Button
            type="link"
            to="/"
            text="Kembali ke Home"
            color="mt-10 text-white bg-secondary hover:bg-secondary-hover"
          />
        </div>
      </div>
    </section>
  );
}
