import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Button from "./Button.jsx";
import { BiMenu, BiX } from "react-icons/bi";
import Dropdown from "./Dropdown.jsx";

export default function Header() {
  const [offCanvas, setOffCanvas] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = Cookies.get("token");

  useEffect(() => {
    // Check if token exists in cookies
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  return (
    <nav className="py-6">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="lg:w-3/12 w-6/12">
            <a href="">
              <img
                className="cursor-pointer"
                src="/assets/images/Logo.svg"
                alt="Logo Pangkas Pro"
              />
            </a>
          </div>
          <div
            className={`lg:w-5/12 w-full bg-primary lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all z-10 ${
              offCanvas ? "left-0" : "-left-full"
            }`}
          >
            <button
              className="absolute top-8 right-3 lg:hidden"
              onClick={() => setOffCanvas(false)}
            >
              <BiX size={35} />
            </button>
            <ul className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-8 lg:flex-row lg:items-center lg:justify-center">
              <li className="cursor-pointer font-semibold text-secondary hover:text-secondary-hover">
                <a href="">Home</a>
              </li>
              <li className="cursor-pointer text-black hover:text-secondary-hover">
                <a href="">Services</a>
              </li>
              <li className="cursor-pointer text-black hover:text-secondary-hover">
                <a href="">Gallery</a>
              </li>
              <li className="cursor-pointer text-black hover:text-secondary-hover">
                <a href="">About</a>
              </li>
              <li className="lg:hidden">
                {isLoggedIn ? (
                  <Dropdown />
                ) : (
                  <Button
                    type="link"
                    to="/sign-in"
                    text="Sign In"
                    color="text-white bg-secondary hover:bg-secondary-hover"
                  />
                )}
              </li>
            </ul>
          </div>
          <div className="lg:w-4/12 lg:flex lg:space-x-5 lg:justify-end hidden">
            <label htmlFor="search" className="flex">
              <img
                src="/assets/images/Search.svg"
                alt="search"
                className="py-2 px-2 bg-white rounded-l-lg"
              />
              <input
                type="text"
                name="search"
                id="search"
                className="py-2 bg-white border-0 rounded-r-lg focus:outline-none"
                placeholder="Search ..."
              />
            </label>
            {isLoggedIn ? (
              <Dropdown />
            ) : (
              <Button
                type="link"
                to="/sign-in"
                text="Sign In"
                color="text-white bg-secondary hover:bg-secondary-hover"
              />
            )}
          </div>
          <div
            onClick={() => setOffCanvas(!offCanvas)}
            className="lg:hidden w-6/12 flex justify-end"
          >
            <BiMenu size={35} />
          </div>
        </div>
      </div>
    </nav>
  );
}
