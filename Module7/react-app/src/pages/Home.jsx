import React from "react";
import Emoji from "../components/Emoji.jsx";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome to Crypto Dashboard</h2>
      <p>Track Bitcoin prices and set your mood!</p>
      <Emoji />
    </div>
  );
}
