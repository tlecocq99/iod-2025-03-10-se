import React, { useState } from "react";
import useBitcoinRate from "../hooks/useBitcoinRate";
import Emoji from "./Emoji";
import "./BitcoinRates.css";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = useBitcoinRate(currency);

  const formatted =
    price != null
      ? new Intl.NumberFormat(undefined, {
          style: "currency",
          currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(price)
      : null;

  return (
    <div className="BitcoinRates componentBox">
      <Emoji />
      <h3>Bitcoin Exchange Rate</h3>
      <label className="currency-label">
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <div className="status">
        {loading && <p>Loading…</p>}
        {error && <p className="error">Error: {error}</p>}
        {formatted && <p className="result">1 BTC = {formatted}</p>}
      </div>
    </div>
  );
}
