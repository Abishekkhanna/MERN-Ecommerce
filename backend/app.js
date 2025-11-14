import express from "express";
import productRoute from "./routes/productRoute.js";
import errorHandler from "./middleware/error.js";

const app = express();

//middleware for getting response as json-format
app.use(express.json());

//routes
app.use("/api/v1/", productRoute);

//error middleware
app.use(errorHandler);

export default app;
