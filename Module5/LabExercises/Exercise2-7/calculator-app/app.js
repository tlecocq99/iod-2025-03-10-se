const express = require("express");
const app = express();
const port = 3000;

const calculatorRoutes = require("./routes/calculatorRoutes");

app.use("/calculator", calculatorRoutes);

app.use("/", express.static("public"));

module.exports = app;