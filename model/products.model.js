const allProducts = require("../data/products.json");

function getAllProducts(limit) {
  return limit ? allProducts.slice(0, limit) : allProducts;
}

function getProduct(id) {
  return allProducts.find(product => product.id === id);
}

function getCategories() {
  let categories = [];
  allProducts.forEach(product => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });
  return categories;
}
function getCategory(category) {
  return allProducts.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
  );
}

module.exports = {
  getAllProducts,
  getProduct,
  getCategories,
  getCategory,
};
