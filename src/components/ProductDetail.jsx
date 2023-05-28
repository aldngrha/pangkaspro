import React, { useEffect, useState } from "react";
import Button from "./Button.jsx";
import Star from "./Star.jsx";
import { BsHeart } from "react-icons/bs";
import Counter from "./Counter.jsx";
import useDetailPageStore from "../stores/useDetailPageStore.jsx";

export default function ProductDetail() {
  const dataApi = useDetailPageStore((state) => state.dataApi);
  const [slider, setSlider] = useState("");

  useEffect(() => {
    if (dataApi.imageId && dataApi.imageId.length > 0) {
      setSlider(dataApi.imageId[0]);
    }
  }, [dataApi.imageId]);

  return (
    <section className="container mx-auto bg-white rounded-2xl">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="flex-1">
          <div className="slider ml-4">
            <div className="thumbnail">
              {dataApi.imageId?.map((item) => {
                return (
                  <div
                    className="px-2"
                    key={item._id}
                    onClick={() => setSlider(item)}
                  >
                    <div
                      className={[
                        "item",
                        slider._id === item._id ? "bg-gray-100 selected" : "",
                      ].join(" ")}
                    >
                      <img
                        src={`http://localhost:9000/${item.imageUrl}`}
                        alt={item._id}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <img
                  src={`http://localhost:9000/${slider.imageUrl}`}
                  alt={dataApi.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6 ">
          <h2 className="text-2xl md:text-5xl font-semibold font-poppins">
            {dataApi.name}
          </h2>
          <div className="flex justify-between">
            <p className="text-lg md:text-xl font-poppins py-3">
              {dataApi.price
                ? `Rp${dataApi.price.toLocaleString("id-ID")}`
                : "Price not available"}
            </p>
            <button>
              <BsHeart className="text-3xl" />
            </button>
          </div>
          <Star value={dataApi.rating} />
          <div className="pt-5">
            <p className="text-lg font-medium">Jumlah Orang</p>
          </div>
          <Counter />
          <hr className="my-4" />
          <h6 className="text-xl font-semibold mb-4 font-poppins">
            Tentang pagkas rambut
          </h6>
          <p className="text-gray-500 font-light font-poppins">
            {dataApi.description}
          </p>
          <Button
            onClick=""
            text="Pesan Sekarang"
            color="text-white bg-secondary hover:bg-secondary-hover my-4"
          />
        </div>
      </div>
    </section>
  );
}
