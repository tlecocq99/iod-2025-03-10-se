const store = require("../libraries/store");

async function getProducts(req, res) {
  try {
    const products = await store.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send("Error fetching products: " + error.message);
  }
}

module.exports = { getProducts };
