import express, { Router } from "express";
import { getSingleProducts, getAllProducts } from "../controller/productController.js";
const router = express.Router();

router.get("/product", getSingleProducts);
router.get("/products", getAllProducts);

export default router;