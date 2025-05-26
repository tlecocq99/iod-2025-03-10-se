const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("This is a test");
});

app.get("/number3", (req, res) => {
  res.send("2 wasn't enough");
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
