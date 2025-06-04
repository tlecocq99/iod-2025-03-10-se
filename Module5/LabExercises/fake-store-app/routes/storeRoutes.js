const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");
// Route to fetch and return product data from the Fake Store API
router.get("/products", storeController.getProducts);

module.exports = router;
