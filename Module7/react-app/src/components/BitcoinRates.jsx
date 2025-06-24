import React, { useState } from "react";
import useBitcoinRate from "../hooks/useBitcoinRate";
import Emoji from "./Emoji";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const currencies = ["USD", "EUR", "GBP", "NZD", "AUD", "SGD"];

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
      : "";

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", my: 4 }}>
      <CardContent>
        <Emoji />
        <Typography variant="h6" align="center" gutterBottom>
          Bitcoin Exchange Rate
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="currency-select-label">Currency</InputLabel>
          <Select
            labelId="currency-select-label"
            value={currency}
            label="Currency"
            onChange={(e) => setCurrency(e.target.value)}
          >
            {currencies.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {loading && <Typography align="center">Loading…</Typography>}
        {error && (
          <Typography align="center" color="error">
            {error}
          </Typography>
        )}
        {formatted && (
          <Typography variant="subtitle1" align="center">
            1 BTC = {formatted}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
