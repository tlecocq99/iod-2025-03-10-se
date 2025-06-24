import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(`Logged in as ${user}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "300px", margin: "0 auto" }}
    >
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ width: "100%", padding: ".5rem", margin: ".5rem 0" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        style={{ width: "100%", padding: ".5rem", margin: ".5rem 0" }}
      />
      <button type="submit" style={{ padding: ".5rem 1rem" }}>
        Login
      </button>
      {msg && <p style={{ textAlign: "center", marginTop: ".5rem" }}>{msg}</p>}
    </form>
  );
}
