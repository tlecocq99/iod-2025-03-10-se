import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(`Welcome back, ${user}! You are now logged in.`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 300, mx: "auto", mt: 4 }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" fullWidth>
        Login
      </Button>
      {msg && (
        <Typography align="center" mt={2}>
          {msg}
        </Typography>
      )}
    </Box>
  );
}
