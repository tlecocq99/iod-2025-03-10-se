import { useState, useEffect } from "react";

export default function useBitcoinRate(currency) {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`,
      { signal: controller.signal }
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => setPrice(data.bitcoin[currency.toLowerCase()]))
      .catch((e) => e.name !== "AbortError" && setError(e.message))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [currency]);

  return { price, loading, error };
}
