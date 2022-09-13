import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./Dataimport.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import orderRouter from "./Routes/orderRouter.js";
import productRoute from "./Routes/ProductRoutes.js";
import userRouter from "./Routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());
// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 3000;
console.log(port);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
