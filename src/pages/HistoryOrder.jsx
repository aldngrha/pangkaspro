import React, { useEffect, useState } from "react";
import { BsFillFileEarmarkPdfFill, BsStarFill } from "react-icons/bs";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import Aside from "../components/Aside.jsx";
import StarRating from "../components/StarRating.jsx";
import useRatingStore from "../stores/useRatingStore.jsx";
import Spinner from "../components/Spinner.jsx";

export default function HistoryOrder() {
  const selectedRating = useRatingStore((state) => state.selectedRating);
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBarberId, setModalBarberId] = useState(null);
  const [isLoading, setIsLoading] = useState({});
  const token = Cookies.get("token");

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleInvoiceClick = async (transactionId) => {
    setIsLoading((prevLoading) => ({
      ...prevLoading,
      [transactionId]: true,
    }));
    try {
      const response = await axios.get(
        `http://localhost:9000/api/v1/invoice/${transactionId}/download`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        }
      );

      // Membuat URL objek dari respon blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Membuat elemen <a> untuk menginisiasi pengunduhan
      const a = document.createElement("a");
      a.href = url;
      a.download = "invoice-order-pangkaspro.pdf";
      a.click();

      // Membersihkan URL objek setelah selesai
      window.URL.revokeObjectURL(url);
      toast.success("Berhasil mendownload invoice", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error fetching invoice:", error);
    } finally {
      setIsLoading((prevLoading) => ({
        ...prevLoading,
        [transactionId]: false,
      }));
    }
  };

  const handleOpenModal = (barberId) => {
    setIsModalOpen(true);
    setModalBarberId(barberId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalBarberId(null);
  };

  function getStatusClass(status) {
    const statusClasses = {
      pending: "bg-yellow-300 text-white",
      ongoing: "bg-blue-500 text-white",
      completed: "bg-green-500 text-white",
      rejected: "bg-red-500 text-white",
      "pending approval": "bg-yellow-300 text-white",
    };

    return statusClasses[status] || "bg-gray-300 text-black";
  }

  const handleRating = async (barberId) => {
    const rating = {
      value: selectedRating,
    };
    await axios.post(
      `http://localhost:9000/api/v1/rating/${barberId}/barbershop`,
      rating,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("Berhasil memberikan rating", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    handleCloseModal();
  };

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/v1/transactions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data.data.transaction;
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <>
      <Aside />
      <div className="p-4 sm:ml-64">
        <div className="pb-3 space-y-2">
          <h1 className="text-3xl font-nunito font-semibold">
            All Transaction
          </h1>
          <h6 className="font-poppins font-light text-gray-400">
            Lihat semua transaksimu
          </h6>
        </div>
        <div className="p-4 bg-white rounded-lg">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Invoice
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Barbershop
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kapster
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jumlah
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Harga
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.length > 0 ? (
                  transactions.map((transaction) => (
                    <tr key={transaction._id} className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {transaction.invoiceNumber}
                      </th>
                      <td className="px-6 py-4">
                        {new Date(transaction.createdAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        {transaction.barberId && transaction.barberId.name}
                      </td>
                      <td className="px-6 py-4">
                        {transaction.barberId.kapsterId[0].name}
                      </td>
                      <td className="px-6 py-4">{transaction.quantity}</td>
                      <td className="px-6 py-4">
                        Rp{transaction.totalAmount.toLocaleString("id-ID")}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`py-1 px-2 rounded-md uppercase font-semibold ${getStatusClass(
                            transaction.status
                          )}`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex space-x-2">
                        {transaction.status === "completed" && (
                          <>
                            <button
                              onClick={() =>
                                handleOpenModal(transaction.barberId._id)
                              }
                              className="text-lg font-medium text-yellow-300 hover:text-yellow-400 flex flex-col items-center justify-center"
                            >
                              <BsStarFill />
                              <span className="text-sm">Rate</span>
                            </button>
                            {isLoading[transaction._id] ? (
                              <Spinner />
                            ) : (
                              <button
                                onClick={() =>
                                  handleInvoiceClick(transaction._id)
                                }
                                className="text-lg font-medium text-blue-500 hover:text-blue-600 flex flex-col items-center justify-center"
                              >
                                <BsFillFileEarmarkPdfFill />
                                <span className="text-sm">Invoice</span>
                              </button>
                            )}
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-3">
                      No order found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-96 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Rating</h3>
            <div className="flex items-center justify-center mt-10">
              <StarRating />
            </div>
            <div className="flex justify-end mt-10">
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-secondary-hover"
                onClick={() => handleRating(modalBarberId)}
              >
                Berikan Rating
              </button>
              <button
                className="px-4 py-2 ml-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:text-gray-900 hover:bg-gray-100"
                onClick={handleCloseModal}
              >
                Tidak jadi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
