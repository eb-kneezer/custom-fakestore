const allProducts = require("../data/products.json");

function getAllProducts() {
  return allProducts;
}

function getProduct(id) {
  return allProducts.find(product => product.id === id);
}

module.exports = {
  getAllProducts,
  getProduct,
};
