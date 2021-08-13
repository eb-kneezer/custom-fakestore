const express = require("express");
const productsModel = require("./model/products.model");

const app = express();

require("./startup/prod")(app);

const PORT = process.env.PORT || 6969;

app.get("/products", (req, res) => {
  res.send(productsModel.getAllProducts());
});

app.get("/products/:id", (req, res) => {
  res.send(productsModel.getProduct(+req.params.id));
});

app.listen(PORT, () => {
  console.log("products app live...");
});
