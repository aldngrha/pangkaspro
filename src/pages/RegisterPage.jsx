import React, { useState } from "react";
import Input from "../components/Input.jsx";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function RegisterPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "yes") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };
  return (
    <section className="container">
      <div className="flex">
        <div className="container p-4 lg:p-8 ">
          <img src="/assets/images/Logo.svg" alt="Logo" />
          <div
            className={`flex flex-col mt-5 lg:mt-20 lg:mx-10 py-12 bg-white rounded-xl transition-all duration-500  ${
              showInput ? "h-[820px] lg:h-[830px]" : "h-[750px]"
            }`}
          >
            <div className="items-center text-center pb-7">
              <h1 className="font-nunito font-black text-xl mb-4">
                Masuk Akun
              </h1>
              <p className="text-gray-400 font-light">
                Cari pangkas rambut terbaik <br /> langgananmu disini
              </p>
            </div>
            <Input
              forLabel="Name"
              label="Nama Lengkap"
              type="text"
              margin="mx-7 lg:mx-16"
              placeholder="Masukkan nama lengkap ..."
            />
            <Input
              forLabel="Email"
              label="Email"
              type="email"
              margin="mx-7 lg:mx-16"
              placeholder="Masukkan email ..."
            />
            <Input
              forLabel="Password"
              label="Password"
              type="password"
              margin="mx-7 lg:mx-16"
              placeholder="Masukkan password ..."
            />
            <div className="my-4">
              <div className="mx-7 lg:mx-16">
                <p className="mb-2 font-poppins font-medium">
                  Mau menjadi kapster?
                </p>
                <label className="inline-flex items-center mr-6">
                  <input
                    type="radio"
                    className="appearance-none text-green-500"
                    name="option"
                    value="yes"
                    onChange={handleRadioChange}
                    checked={selectedOption === "yes"}
                  />
                  <span
                    className={`rounded-full h-5 w-5 transition-all duration-500 ${
                      selectedOption === "yes"
                        ? "ring-offset-2 ring-gray-400 ring-1 bg-green-500"
                        : "ring-1 ring-gray-400 bg-white"
                    } flex items-center justify-center relative`}
                  />
                  <span className="ml-2 text-gray-500 font-poppins font-light">
                    Yes
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="appearance-none text-green-500"
                    name="option"
                    value="no"
                    onChange={handleRadioChange}
                    checked={selectedOption === "no"}
                  />
                  <span
                    className={`ml-2 rounded-full h-5 w-5 transition-all duration-500 ${
                      selectedOption === "no"
                        ? "ring-offset-2 ring-gray-400 ring-1 bg-green-500"
                        : "ring-1 ring-gray-400 bg-white"
                    } flex items-center justify-center`}
                  />
                  <span className="ml-2 text-gray-500 font-poppins font-light">
                    No
                  </span>
                </label>
              </div>
              <div
                className={`mt-3 -mb-28 transition-opacity duration-500 ${
                  showInput ? "opacity-100" : "opacity-0 duration-200"
                }`}
              >
                <Input
                  forLabel="Nama Pangkas"
                  label="Nama Pangkas"
                  type="text"
                  margin="mx-7 lg:mx-16"
                  placeholder="Masukkan nama pangkas ..."
                />
              </div>
            </div>
            <div
              className={`flex flex-col ${
                showInput
                  ? "transition duration-500 translate-y-20"
                  : "transition duration-500 translate-y-0"
              }`}
            >
              <Button
                onClick=""
                text="Daftar"
                color="mt-5 text-white bg-secondary hover:bg-secondary-hover mx-7 lg:mx-16"
              />
              <p className="text-center pt-4 text-gray-400 font-light font-poppins">
                Sudah punya akun?{" "}
                <Link
                  to="/"
                  className="text-secondary font-bold hover:text-secondary-hover"
                >
                  Masuk disini
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-l-[100px] min-h-[1075px] -mr-[69px] hidden lg:inline">
          <img
            className="rounded-l-[100px] object-center"
            src="/assets/images/Register.jpg"
            alt="Login Image"
          />
        </div>
      </div>
    </section>
  );
}
