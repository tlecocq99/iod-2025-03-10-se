import React from "react";
import Emoji from "../components/Emoji";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Welcome to Crypto Dashboard
      </Typography>
      <Typography gutterBottom>
        Track Bitcoin prices and set your mood.
      </Typography>
      <Emoji />
    </Box>
  );
}
