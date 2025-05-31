const calculatorRoutes = require("./routes/calculatorRoutes");
const express = require("express");
const app = express();
const port = 3000;

app.use("/calculator", calculatorRoutes);

app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
