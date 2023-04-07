import React from "react";
import Button from "./Button.jsx";

export default function ProductDetail() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              <div className="px-2" onClick="">
                <div className="bg-gray-100 selected">
                  <img
                    src=""
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <img
                  src=""
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6 ">
          <h2 className="text-5xl font-semibold font-poppins">
            Pangkas Rambut Ipung
          </h2>
          <p className="text-xl font-poppins py-3">Rp140.000</p>
          <Button
            onClick=""
            text="Pesan Sekarang"
            color="text-white bg-secondary hover:bg-secondary-hover "
          />
          <hr className="my-4" />
          <h6 className="text-xl font-semibold mb-4 font-poppins">
            Tentang pagkas rambut
          </h6>
          <p className="text-gray-400 font-light font-poppins">
            Pangkas Rambut Ipung adalah pangkas rambut yang berada di Kota
            Bandar Lampung , sudah 10 tahun bekerja sebagai kapster, memiliki
            keahlian dalam menata rambut laki laki.
            <br /> <br />
            Pangkas Rambut Ipung menyediakan layanan pangkas panggilan kerumah
            konsumen, dengan peralatan yang dibawa oleh kapster. semua sudah
            termasuk ongkos jalan, bersih-bersih, tempat sampah, keramas, pijat,
            vitamin rambut dan pomade.
          </p>
        </div>
      </div>
    </section>
  );
}
