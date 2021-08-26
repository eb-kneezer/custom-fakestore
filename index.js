const express = require("express");
const path = require("path");
const productsModel = require("./model/products.model");

const app = express();
const PORT = process.env.PORT || 6969;

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

require("./startup/prod")(app);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/products", (req, res) => {
  const limit = +req.query.limit || 0;
  res.send(productsModel.getAllProducts(limit));
});

app.get("/products/categories", (req, res) => {
  res.send(productsModel.getCategories());
});

app.get("/products/category/:category", (req, res) => {
  res.send(productsModel.getCategory(req.params.category));
});

app.get("/products/:id", (req, res) => {
  res.send(productsModel.getProduct(+req.params.id));
});

app.listen(PORT, () => {
  console.log("products app live...");
});
