import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import BitcoinRates from "./components/BitcoinRates.jsx";

export default function AppRoutes() {
  return (
    <>
      <nav className="app-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/rates">Bitcoin Rates</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rates" element={<BitcoinRates />} />
      </Routes>
    </>
  );
}
