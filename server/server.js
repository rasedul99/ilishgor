import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./Dataimport.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import productRoute from "./Routes/ProductRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(cors());
// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 3000;
console.log(port);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
