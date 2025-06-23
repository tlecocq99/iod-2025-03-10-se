import React, { useState } from "react";
import useBitcoinRate from "../hooks/useBitcoinRate";
import Emoji from "./Emoji";
import "./BitcoinRates.css";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = useBitcoinRate(currency);

  return (
    <div className="BitcoinRates componentBox">
      <Emoji />
      <h3>Bitcoin Exchange Rate</h3>
      <label htmlFor="currency-select" className="currency-label">
        Choose currency:
        <select
          id="currency-select"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="currency-select"
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>
      <div className="status">
        {loading && <p className="loading">Loading…</p>}
        {error && <p className="error">Error: {error}</p>}
        {price != null &&
          !loading &&
          !error &&
          (() => {
            // format the number as money in the current currency
            const formatted = new Intl.NumberFormat(undefined, {
              style: "currency",
              currency,
              // optional: drop decimals if you like
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(price);

            return <p className="result">1 BTC = {formatted}</p>;
          })()}
      </div>
    </div>
  );
}
