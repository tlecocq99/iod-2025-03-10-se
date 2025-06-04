const express = require("express");
const app = express();

const storeRoutes = require("./routes/storeRoutes");

app.use("/store", storeRoutes);

app.use("/", express.static("public"));

module.exports = app;
