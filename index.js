const express = require("express");
const path = require("path");
const cors = require("cors");
const productsModel = require("./model/products.model");
const usersModel = require("./model/users.model");

const app = express();
const PORT = process.env.PORT || 6969;

// app.use((req, res, next) => {
//   res.append("Access-Control-Allow-Origin", ["*"]);
//   res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.append("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.use(cors());

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

require("./startup/prod")(app);

app.get("/", (req, res) => {
  res.render("index");
});

// ==========PRODUCTS===============

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

// ===========USER=================

app.get("/users", (req, res) => {
  const limit = +req.query.limit || 0;
  res.send(usersModel.getAllUsers(limit));
});

app.get("/users/gender/:gender", (req, res) => {
  res.send(usersModel.getUserByGender(req.params.gender));
});

app.get("/users/:id", (req, res) => {
  res.send(usersModel.getUser(+req.params.id));
});

app.listen(PORT, () => {
  console.log("products app live...");
});
