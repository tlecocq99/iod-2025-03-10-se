import React from "react";
import Emoji from "../components/Emoji";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Welcome to The Crypto Dashboard
      </Typography>
      <Typography gutterBottom>
        Track Bitcoin prices and let us know how you're feeling about the
        market!
      </Typography>
      <Emoji />
    </Box>
  );
}
