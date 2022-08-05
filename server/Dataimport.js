import express from "express";
import asyncHandler from "express-async-handler";
import products from "./data/Product.js";
import users from "./data/users.js";
import Product from "./Models/ProductModel.js";
import User from "./Models/UserModel.js";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const ImportUser = await User.insertMany(users);
    res.send({ ImportUser });
  })
);
ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const ImportProducts = await Product.insertMany(products);
    res.send({ ImportProducts });
  })
);
export default ImportData;
