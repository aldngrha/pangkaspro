import React, { useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function Heart({ barberId }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const token = Cookies.get("token");
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const apiVersion = "api/v1";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleFavorite = async () => {
    setIsFavorite(!isFavorite); // Gantikan dengan token JWT yang valid

    try {
      await axios.post(
        `${apiUrl}/${apiVersion}/favorite/${barberId}`,
        null,
        config
      );
      toast.success("Berhasil menambah favorite", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Internal server error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <button onClick={handleFavorite}>
      <BsHeartFill
        className={`text-xl text-gray-200 transition-colors duration-300 ease-in-out ${
          isFavorite ? "text-red-500" : ""
        }`}
      />
    </button>
  );
}
