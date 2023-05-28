import React, { useState } from "react";
import Input from "../components/Input.jsx";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function LoginPage() {
  // const [form, setForm] = useState("");

  const handleLogin = async () => {};
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
            <form className="flex flex-col">
              <Input
                forLabel="email"
                label="Email"
                name="email"
                type="email"
                value=""
                // onChange={(event) => setEmail(event.target.value)}
                margin="mx-7 lg:mx-16"
                placeholder="Masukkan email ..."
              />
              <Input
                forLabel="password"
                label="Password"
                name="email"
                type="password"
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
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
                // onClick={() => handleLogin()}
                text="Masuk"
                color="mt-5 text-white bg-secondary hover:bg-secondary-hover mx-7 lg:mx-16"
              />
            </form>
            <p className="text-center pt-4 text-gray-400 font-light font-poppins">
              Belum punya akun?{" "}
              <Link
                to="/sign-up"
                className="text-secondary font-bold hover:text-secondary-hover"
              >
                Daftar disini
              </Link>
            </p>
            <p className="text-center pt-4 text-gray-400 font-light font-poppins">
              Sudah daftar menjadi owner dan kapster? <br />
              <a
                href="http://localhost:9000"
                className="text-secondary font-bold hover:text-secondary-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login disini
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
