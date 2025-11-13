import express, { Router } from "express";
import { getSingleProducts, getAllProducts, addProduct } from "../controller/productController.js";
const router = express.Router();

router.get("/product", getSingleProducts);
router.route("/products").get(getAllProducts).post(addProduct);

export default router;