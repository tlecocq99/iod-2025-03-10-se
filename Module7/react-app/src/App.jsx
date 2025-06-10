import React from "react";
import "./App.css";
import BitcoinRates from "./components/BitcoinRates.jsx";
export default function App() {
  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
      <BitcoinRates />
    </div>
  );
}
