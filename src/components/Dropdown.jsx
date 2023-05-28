import React, { useState } from "react";
import { BsArrowBarRight, BsGear } from "react-icons/bs";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout logic here
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center ml-3">
        <button
          type="button"
          className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
          aria-expanded={dropdown}
          onClick={() => setDropdown(!dropdown)}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
          />
        </button>
        {dropdown && (
          <div
            className="absolute
           md:right-0 mt-36 w-48 bg-white border rounded-md shadow-lg"
          >
            <div className="flex flex-col gap-y-2 py-2 px-3">
              <a
                href=""
                className="hover:translate-x-2 transition-transform ease-in duration-200 hover:text-secondary-hover px-2 py-1 flex flex-row items-center gap-x-2 text-gray-600"
              >
                <span>
                  <BsGear />
                </span>
                <span className="text-sm">Pengaturan</span>
              </a>
              <div
                className="hover:translate-x-2 transition-transform ease-in duration-200 hover:text-secondary-hover px-2 py-1 cursor-pointer text-gray-600 flex flex-row items-center gap-x-2"
                onClick={() => handleLogout()}
              >
                <span className="transform rotate-180">
                  <BsArrowBarRight />
                </span>
                <span className="text-sm">Keluar</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
