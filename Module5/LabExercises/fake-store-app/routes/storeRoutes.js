const express = require("express");
const router = express.Router();
const axios = require("axios");
const storeController = require("../controllers/storeController");
// Route to fetch and return product data from the Fake Store API
router.get("/api", async (req, res) => {
  try {
    const response = await await axios.get("https://fakestoreapi.com/products");
    const products = await response.json();
    res.json(products);
  } catch (error) {
    res.status(500).send("Error fetching products");
  }
});

module.exports = router;
