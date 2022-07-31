import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDatabase from "./config/MongoDb.js";
import products from "./data/Product.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(cors());
// Load product from server
app.get("/api/products", (req, res) => {
  res.json(products);
});
// Single product from server
app.get("/api/product/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});
app.get("/", (req, res) => {
  res.send("server is running");
});
const port = process.env.PORT;
console.log(port);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
