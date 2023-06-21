import React, { useState } from "react";
import Input from "../components/Input.jsx";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    option: "",
    barberName: "",
  });
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const apiVersion = "api/v1";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiUrl}/${apiVersion}/auth/register`,
        form
      );
      // Proses berhasil, lakukan pengolahan data atau navigasi ke halaman lain

      toast.success("Registrasi berhasil", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Redirect to the login page
      navigate("/sign-in");
    } catch (error) {
      // Tangani error saat pendaftaran gagal
      console.error(error);
      toast.error("Registrasi gagal");
    }
  };

  return (
    <section className="container">
      <div className="flex">
        <div className="container p-4 lg:p-8 ">
          <Link to="/">
            <img src="/assets/images/Logo.svg" alt="Logo" />
          </Link>
          <div
            className="flex flex-col mt-5 lg:mt-20 lg:mx-10 py-12 bg-white rounded-xl transition-all duration-500 h-[750px]
            "
          >
            <div className="items-center text-center pb-7">
              <h1 className="font-nunito font-black text-xl mb-4">
                Daftar Akun
              </h1>
              <p className="text-gray-400 font-light">
                Cari pangkas rambut terbaik <br /> langgananmu disini
              </p>
            </div>
            <form action="">
              <Input
                forLabel="Name"
                name="name"
                label="Nama Lengkap"
                type="text"
                value={form.name}
                margin="mx-7 lg:mx-16"
                placeholder="Masukkan nama lengkap ..."
                onChange={handleChange}
              />
              <Input
                forLabel="Email"
                label="Email"
                name="email"
                type="email"
                value={form.email}
                margin="mx-7 lg:mx-16"
                placeholder="Masukkan email ..."
                onChange={handleChange}
              />
              <Input
                forLabel="Password"
                label="Password"
                name="password"
                type="password"
                value={form.password}
                margin="mx-7 lg:mx-16"
                placeholder="Masukkan password ..."
                onChange={handleChange}
              />

              <div className="flex flex-col transition duration-500 translate-y-0">
                <Button
                  onClick={handleSubmit}
                  type="button"
                  text="Daftar"
                  color="mt-5 text-white bg-secondary hover:bg-secondary-hover mx-7 lg:mx-16"
                />
                <p className="text-center pt-4 text-gray-400 font-light font-poppins">
                  Sudah punya akun?{" "}
                  <Link
                    to="/sign-in"
                    className="text-secondary font-bold hover:text-secondary-hover"
                  >
                    Masuk disini
                  </Link>
                </p>
              </div>
            </form>
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
