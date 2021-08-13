const express = require("express");
const productsModel = require("./model/products.model");

const app = express();
const PORT = process.env.PORT || 6969;

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

require("./startup/prod")(app);

app.get("/products", (req, res) => {
  res.send(productsModel.getAllProducts());
});

app.get("/products/:id", (req, res) => {
  res.send(productsModel.getProduct(+req.params.id));
});

app.listen(PORT, () => {
  console.log("products app live...");
});
