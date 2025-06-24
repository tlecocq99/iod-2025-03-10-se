import React from "react";
import { BrowserRouter } from "react-router-dom";
import { EmojiProvider } from "./context/EmojiContext";
import AppRoutes from "./AppRoutes";
import { CssBaseline, Container } from "@mui/material";

export default function App() {
  return (
    <EmojiProvider>
      <CssBaseline />
      <BrowserRouter>
        <Container>
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </EmojiProvider>
  );
}
