import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BitcoinRates from "./components/BitcoinRates";

export default function AppRoutes() {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Button sx={{ mr: 2 }} color="inherit" component={NavLink} to="/">
            Home
          </Button>
          <Button
            sx={{ mr: 2 }}
            color="inherit"
            component={NavLink}
            to="/login"
          >
            Login
          </Button>
          <Button
            sx={{ mr: 2 }}
            color="inherit"
            component={NavLink}
            to="/rates"
          >
            Rates
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rates" element={<BitcoinRates />} />
      </Routes>
    </>
  );
}
