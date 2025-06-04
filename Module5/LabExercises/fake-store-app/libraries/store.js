const axios = require("axios");
class Store {
  async getProducts() {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  }
}
module.exports = new Store;
