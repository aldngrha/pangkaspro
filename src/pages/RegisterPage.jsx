import React, { useState } from "react";
import Input from "../components/Input.jsx";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showInput, setShowInput] = useState(false);
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
    if (name === "option") {
      setSelectedOption(value);
      setForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleRadioChange = (e) => {
    const optionValue = e.target.value;
    setSelectedOption(optionValue);
    if (e.target.value === "yes") {
      setForm({ ...form, option: optionValue });
      setShowInput(true);
    } else {
      setForm({ ...form, option: optionValue });
      setShowInput(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiUrl}/${apiVersion}/auth/register`,
        form
      );
      // Proses berhasil, lakukan pengolahan data atau navigasi ke halaman lain
      console.log(response.data);
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
            className={`flex flex-col mt-5 lg:mt-20 lg:mx-10 py-12 bg-white rounded-xl transition-all duration-500  ${
              showInput ? "h-[820px] lg:h-[830px]" : "h-[750px]"
            }`}
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
              <div className="my-4">
                <div className="mx-7 lg:mx-16">
                  <p className="mb-2 font-poppins font-medium">
                    Mau membuka pangkas rambut?
                  </p>
                  <label className="inline-flex items-center mr-6">
                    <input
                      type="radio"
                      className="appearance-none text-green-500 hidden"
                      name="option"
                      value="yes"
                      onChange={handleRadioChange}
                      checked={selectedOption === "yes" && showInput}
                    />
                    <span
                      className={`rounded-full h-5 w-5 transition-all duration-500 ${
                        selectedOption === "yes"
                          ? "ring-offset-2 ring-gray-400 ring-1 bg-green-500"
                          : "ring-1 ring-gray-400 bg-white"
                      } flex items-center justify-center relative`}
                    />
                    <span className="ml-2 text-gray-500 font-poppins font-light">
                      Ya
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="appearance-none text-green-500 hidden"
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
                      Tidak
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
                    name="barberName"
                    value={form.barberName}
                    margin="mx-7 lg:mx-16"
                    placeholder="Masukkan nama pangkas ..."
                    onChange={handleChange}
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
