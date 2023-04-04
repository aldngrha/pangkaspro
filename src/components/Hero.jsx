import React from "react";
import { navLinks } from "../constants/";
import Button from "./Button.jsx";
import Stats from "./Stats.jsx";

export default function Hero() {
  return (
    <section className="py-6">
      <div className="container mx-auto lg:flex lg:justify-between">
        <div className="lg:w-6/12 w-full">
          <h1 className="font-nunito font-semibold text-[28px] leading-relaxed lg:text-[45px] lg:leading-[5rem]">
            Temukan Pangkas Rambut <br /> Terbaik di Bandar Lampung
          </h1>
          <p className="text-[15px] lg:text-xl leading-9 lg:leading-10 text-gray-500 font-light">
            Mencari jasa pangkas rambut terbaik? maka pilihanmu benar telah
            mengunjungi PangkasPro. Kami menawarkan banyak sekali pilihan jasa
            pangkas rambut berkualitas yang siap memberikan penampilan menarik
            untukmu.
          </p>
          <div className="pt-7 lg:pt-9">
            <Button
              type="link"
              to="/barbershop"
              text="Pesan Sekarang"
              color="text-white bg-secondary hover:bg-secondary-hover"
            />
          </div>
          <div className="pt-9 flex items-center justify-between lg:justify-start lg:space-x-8">
            <Stats number={200} text="Konsumen" text2="senang" />
            <Stats number={10} text="Tahun" text2="pengalaman" />
            <Stats number={50} text="Kapster" text2="berkualitas" />
          </div>
        </div>
        <div className="lg:w-6/12 hidden lg:inline lg:w-[545px]">
          <img src="/assets/images/hero.png" alt="Hero" />
        </div>
      </div>
    </section>
  );
}
