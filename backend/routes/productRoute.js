import express, { Router } from "express";
import {
  getSingleProducts,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";
const router = express.Router();

router
  .route("/product/:id")
  .get(getSingleProducts)
  .put(updateProduct)
  .delete(deleteProduct);
router.route("/products").get(getAllProducts).post(addProduct);

export default router;
