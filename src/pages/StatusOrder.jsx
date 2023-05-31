import React, { useEffect, useState } from "react";
import Aside from "../components/Aside.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import { MdLibraryAdd } from "react-icons/md";

export default function StatusOrder() {
  const [transactions, setTransactions] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    fetchTransactions();
  }, []);

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

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/v1/transaction",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTransactions(response.data.data.transaction);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <>
      <Aside />
      <div className="p-4 sm:ml-64">
        <div className="pb-3 space-y-2">
          <h1 className="text-3xl font-nunito font-semibold">Status Order</h1>
          <h6 className="font-poppins font-light text-gray-400">
            Lihat status transaksimu!
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
                        <a
                          href="#"
                          className="text-lg font-medium text-secondary hover:text-secondary-hover flex flex-col items-center justify-center"
                        >
                          <MdLibraryAdd />
                          <span className="text-sm">Tambah</span>
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No status found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
