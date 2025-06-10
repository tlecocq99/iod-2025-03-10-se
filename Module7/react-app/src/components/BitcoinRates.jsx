import React, { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError(null);

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`,
      { signal }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const rate = data.bitcoin?.[currency.toLowerCase()];
        if (rate == null) throw new Error("Unexpected response format");
        setPrice(rate);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!signal.aborted) setLoading(false);
      });

    // cleanup if currency changes or component unmounts
    return () => controller.abort();
  }, [currency]);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <label htmlFor="currency-select">
        Choose currency:{" "}
        <select
          id="currency-select"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>

      <div style={{ marginTop: ".5rem" }}>
        {loading && <p>Loading…</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {price != null && !loading && !error && (
          <p>
            1 BTC = {price} {currency}
          </p>
        )}
      </div>
    </div>
  );
}
