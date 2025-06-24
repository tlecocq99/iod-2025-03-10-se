import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { EmojiProvider } from "./context/EmojiContext.jsx";
import AppRoutes from "./AppRoutes.jsx";
import "./App.css";

export default function App() {
  return (
    <EmojiProvider>
      <Router>
        <div className="App">
          <h1>Crypto Dashboard</h1>
          <AppRoutes />
        </div>
      </Router>
    </EmojiProvider>
  );
}
