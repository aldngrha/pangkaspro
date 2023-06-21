import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const apiVersion = "api/v1";
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${apiUrl}/${apiVersion}/auth/login`,
        form
      );
      // Get the token value from the response
      const token = response.data.data.token;

      toast.success("Berhasil signin", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Set the token value in the cookie
      Cookies.set("token", token);
      navigate("/");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Internal server error", {
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
          <Link to="/">
            <img src="/assets/images/Logo.svg" alt="Logo" />
          </Link>
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
                value={form.email}
                onChange={handleChange}
                margin="mx-7 lg:mx-16"
                placeholder="Masukkan email ..."
              />
              <Input
                forLabel="password"
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                margin="mx-7 lg:mx-16"
                placeholder="Masukkan password ..."
              />
              <Button
                onClick={handleLogin}
                type="button"
                text="Masuk"
                color="mt-5 text-white bg-secondary hover:bg-secondary-hover mx-7 lg:mx-16"
              />
            </form>
            <p className="text-center pt-4 text-gray-400 font-light font-poppins">
              Belum punya akun untuk order?{" "}
              <Link
                to="/sign-up"
                className="text-secondary font-bold hover:text-secondary-hover"
              >
                Daftar disini
              </Link>
            </p>
            <p className="text-center pt-4 text-gray-400 font-light font-poppins">
              Sudah memiliki barbershop atau ingin membuka barbershop?
              <a
                href="https://server-pangkaspro-production.up.railway.app"
                className="text-secondary font-bold hover:text-secondary-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Klik disini
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
