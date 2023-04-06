import React from "react";
import Input from "../components/Input.jsx";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function LoginPage() {
  return (
    <section className="container">
      <div className="flex">
        <div className="rounded-r-[100px] min-h-[894px] hidden lg:inline">
          <img
            className="rounded-r-[100px] object-center"
            src="/assets/images/Login-image.jpg"
            alt="Login Image"
          />
        </div>
        <div className="container p-4 lg:p-8 ">
          <img src="/assets/images/Logo.svg" alt="Logo" />
          <div className="flex flex-col mt-5 lg:mt-20 lg:mx-10 py-12 bg-white rounded-xl">
            <div className="items-center text-center pb-7">
              <h1 className="font-nunito font-black text-xl mb-4">
                Masuk Akun
              </h1>
              <p className="text-gray-400 font-light">
                Cari pangkas rambut terbaik <br /> langgananmu disini
              </p>
            </div>
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
            <Link
              to="/"
              className="ml-[190px] lg:ml-[275px] font-light text-gray-400 font-poppins hover:text-gray-500"
            >
              Lupa password?
            </Link>
            <Button
              onClick=""
              text="Masuk"
              color="mt-5 text-white bg-secondary hover:bg-secondary-hover mx-7 lg:mx-16"
            />
            <p className="text-center pt-4 text-gray-400 font-light font-poppins">
              Belum punya akun?{" "}
              <Link
                to="/"
                className="text-secondary font-bold hover:text-secondary-hover"
              >
                Daftar disini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
