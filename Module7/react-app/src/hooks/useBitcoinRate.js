import { useEffect, useReducer } from "react";

const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

function fetchReducer(state, action) {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, loading: false, price: action.payload, error: null };
    case FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error(`Unhandled action: ${action.type}`);
  }
}

export default function useBitcoinRate(currency) {
  const [state, dispatch] = useReducer(fetchReducer, {
    price: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch({ type: FETCH_INIT });

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
        dispatch({ type: FETCH_SUCCESS, payload: rate });
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          dispatch({ type: FETCH_FAILURE, payload: err.message });
        }
      });

    return () => controller.abort();
  }, [currency]);

  return state; // { price, loading, error }
}
