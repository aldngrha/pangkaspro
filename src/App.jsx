import React from "react";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import CartPage from "./pages/CartPage.jsx";

function App() {
  const token = Cookies.get("token");
  const isLoggedIn = !!token;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:id/barbershop" element={<DetailPage />} />
        <Route
          path="/sign-in"
          element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />}
        />
        <Route
          path="/sign-up"
          element={isLoggedIn ? <Navigate to="/" replace /> : <RegisterPage />}
        />
        <Route
          path="/cart"
          element={
            isLoggedIn ? <CartPage /> : <Navigate to="/sign-in" replace />
          }
        />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
