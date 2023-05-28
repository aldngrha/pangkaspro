import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export default function Kapster({ kapster }) {
  const [isSelected, setIsSelected] = useState(false);
  const { name, imageUrl, statusId } = kapster;
  const [countdown, setCountdown] = useState(statusId.time);
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:9000");

    // Mendengarkan peristiwa pembaruan countdown
    socket.on("countdownUpdate", ({ id, countdown }) => {
      if (id === statusId._id) {
        setCountdown(countdown);
      }
    });

    // Mendengarkan peristiwa pembaruan status
    // Mendengarkan peristiwa pembaruan status
    socket.on("statusUpdate", ({ id, status }) => {
      if (id === statusId._id) {
        if (status === "work") {
          setStatus("");
          setStatusColor("bg-yellow-300");
        } else if (status === "available") {
          setStatus("Tersedia");
          setStatusColor("bg-green-500");
        } else {
          setStatus("Tidak Aktif");
          setStatusColor("bg-red-700");
        }
      }
    });

    // Set status awal
    if (statusId.status === "work") {
      setStatus("");
      setStatusColor("bg-yellow-300");
    } else if (statusId.status === "available") {
      setStatus("Tersedia");
      setStatusColor("bg-green-500");
    } else {
      setStatus("Tidak Aktif");
      setStatusColor("bg-red-700");
    }

    return () => {
      // Membersihkan socket saat komponen dibongkar
      socket.disconnect();
    };
  }, [statusId._id]);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <label
      className={`rounded-lg p-4 pb-4 relative bg-white transition-all cursor-pointer duration-300 ease-in-out ${
        isSelected ? "border border-secondary" : "border border-primary "
      }`}
    >
      <div className="rounded-lg overflow-hidden w-36 h-30">
        <img
          src={`http://localhost:9000/${imageUrl}`}
          alt="Kapster"
          className="w-full h-32 object-cover object-center"
        />
      </div>
      <h4 className="font-poppins font-semibold mt-3">{name}</h4>
      <div className="py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${statusColor}`}></div>
          <p>{status}</p>
        </div>
        <p className="text-gray-400">
          {countdown !== "" ? countdown : "--;--"}
        </p>
      </div>
      <div
        className={`pt-2 flex justify-center ${
          isSelected ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } transition-all duration-300 ease-in-out`}
      >
        <svg
          id="icon-check"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="#FFD9BE" />
          <path
            d="M5.83301 10L8.46459 12.5L14.1663 7.5"
            stroke="#D25B04"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input
        className="hidden"
        type="radio"
        name="kapster"
        checked={isSelected}
        onChange={handleClick}
      />
    </label>
  );
}
