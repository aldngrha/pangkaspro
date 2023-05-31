import React, { useEffect, useState } from "react";
import Aside from "../components/Aside.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import { MdLibraryAdd } from "react-icons/md";
import Star from "../components/Star.jsx";

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/v1/favorites",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFavorites(response.data.data.favorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  return (
    <>
      <Aside />
      <div className="p-4 sm:ml-64">
        <div className="pb-3 space-y-2">
          <h1 className="text-3xl font-nunito font-semibold">
            Favorite Barbershop
          </h1>
          <h6 className="font-poppins font-light text-gray-400">
            Lihat barbershop favoritmu!
          </h6>
        </div>
        <div className="p-4 bg-white rounded-lg">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Barbershop
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Foto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Harga
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {favorites.length > 0 ? (
                  favorites[0].barber.map((barber) => (
                    <tr key={barber._id} className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {barber.name}
                      </th>
                      <td className="px-6 py-4">
                        <img
                          src={`http://localhost:9000/${barber.imageId[0].imageUrl}`}
                          alt="image"
                          className="w-20 h-20 object-cover"
                        />
                      </td>
                      <td className="px-6 py-4">
                        Rp{barber.price.toLocaleString("id-ID")}
                      </td>
                      <td className="px-6 py-4">
                        <Star value={barber.rating} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No favorites found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
