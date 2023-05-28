import React from "react";
import Kapster from "./Kapster.jsx";

export default function KapsterList({ kapsters }) {
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
            {kapsters &&
              kapsters.kapsterId.map((kapster) => (
                <Kapster key={kapster._id} kapster={kapster} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
