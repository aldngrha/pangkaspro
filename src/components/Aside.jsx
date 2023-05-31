import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function Aside() {
  const [username, setUsername] = useState("");
  const token = Cookies.get("token");

  useEffect(() => {
    // Mendapatkan token JWT dari localStorage atau dari tempat lain di aplikasi Anda
    if (token) {
      // Mendekode token JWT untuk mendapatkan payload
      const decodedToken = jwtDecode(token);
      const name = decodedToken.user.name;

      // Mengatur nama pengguna ke state
      setUsername(name);
    }
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout logic here
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-600 w-20 h-20 rounded-full">
              <img
                src={`https://ui-avatars.com/api/?name=${username}`}
                alt="Image"
                className="w-20 h-20 rounded-full"
              />
            </div>
            <p className="py-3 text-gray-700 font-semibold">{username}</p>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard/transactions"
                className="flex items-center p-2 text-gray-500 hover:text-secondary"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">
                  History Order
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/status"
                className="flex items-center p-2 text-gray-500 hover:text-secondary"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Status Order
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/favorite"
                className="flex items-center p-2 text-gray-500 hover:text-secondary"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Favorite</span>
              </Link>
            </li>
            <li>
              <div
                className="flex items-center p-2 text-gray-500 hover:text-secondary cursor-pointer"
                onClick={handleLogout}
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
