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

  const display =
    currency === "NZD"
      ? `${formatted.replace("$", " $")}`
      : currency === "AUD"
      ? `${formatted.replace("$", " $")}`
      : formatted;

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", my: 4 }}>
      <CardContent>
        <Typography mb={3} variant="h4" align="center" gutterBottom>
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
          <Typography
            style={{ fontWeight: "bold" }}
            variant="h5"
            align="center"
          >
            1 BTC = {display}
          </Typography>
        )}
        <Typography mt={6} variant="h6" align="center" color="textSecondary">
          How does today's bitcoin price make you feel?
        </Typography>
        <Typography mt={3} variant="body2" align="center" color="textSecondary">
          Click the smiley face below to express your mood!
        </Typography>
        <Emoji />
      </CardContent>
    </Card>
  );
}
