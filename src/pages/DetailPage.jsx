import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import ProductDetail from "../components/ProductDetail.jsx";
import KapsterList from "../components/KapsterList.jsx";
import useDetailPageStore from "../stores/useDetailPageStore.jsx";

export default function DetailPage() {
  const { id } = useParams();
  const fetchData = useDetailPageStore((state) => state.fetchData);

  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const apiVersion = "api/v1";

  useEffect(() => {
    fetchData(`${apiUrl}/${apiVersion}/detail/${id}/barbershop`);
  }, [id, fetchData]);

  return (
    <>
      <div className="px-4 overflow-hidden">
        <Header />
        <Breadcrumb
          list={[
            { url: "/", name: "Home" },
            { url: `/detail/${id}/barbershop`, name: "Barber Detail" },
          ]}
        />
        <ProductDetail />
        <KapsterList />
        <Footer />
      </div>
    </>
  );
}
