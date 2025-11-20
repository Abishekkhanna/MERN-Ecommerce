import express from "express";
import productRoute from "./routes/productRoute.js";
import errorHandler from "./middleware/error.js";
import userRoute from "./routes/userRoute.js";

const app = express();

//middleware for getting response as json-format
app.use(express.json());

//routes
app.use("/api/v1/", productRoute);
app.use("/api/v1/", userRoute);
//error middleware
app.use(errorHandler);

export default app;
