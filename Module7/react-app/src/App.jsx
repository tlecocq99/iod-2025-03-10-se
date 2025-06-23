import React from "react";
import { EmojiProvider } from "./context/EmojiContext";
import BitcoinRates from "./components/BitcoinRates";
import "./App.css";

export default function App() {
  return (
    <EmojiProvider>
      <div className="App">
        <h1>Crypto Dashboard</h1>
        <BitcoinRates />
      </div>
    </EmojiProvider>
  );
}
