import React from "react";

export default function KapsterList() {
  return (
    <section className="bg-primary py-5">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-bold font-nunito">
            Pilih Kapster
          </h3>
        </div>
        <div className="flex overflow-x-auto mb-4 -mx-3">
          <div className="px-3 flex gap-x-5">
            <div className="rounded-lg p-4 pb-8 relative bg-white">
              <div className="rounded-lg overflow-hidden w-36 h-30">
                <img
                  src="/assets/images/Kapster.jpg"
                  alt="Kapster"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h4 className="font-poppins font-semibold mt-3">Ipung</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
