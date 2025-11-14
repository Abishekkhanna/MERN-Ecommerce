import Product from "../models/productModel.js";
import HandleError from "../helper/handleError.js";

// Add Product
export const addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

// Get all product
export const getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    product,
  });
};

// Get Single Product
export const getSingleProducts = async (req, res, next) => {
  const id = req.params.id;
  let product = await Product.findById(id);
  if (!product) {
    return next(new HandleError("Product Not Found !", 404));
  }
  return res.status(200).json({
    success: true,
    product,
  });
};

// Update Product
export const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  let product = await Product.findById(id);
  if (!product) {
    return next(new HandleError("Product Not Found !", 404));
  }
  const products = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    success: true,
    products,
  });
};

// Delete Product
export const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  let product = await Product.findById(id);
  if (!product) {
    return next(new HandleError("Product Not Found !", 404));
  }

  const products = await Product.findByIdAndDelete(id);
  return res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
};
