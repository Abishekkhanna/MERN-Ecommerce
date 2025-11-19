import Product from "../models/productModel.js";
import HandleError from "../helper/handleError.js";
import APIhelper from "../helper/APIhelper.js";

// Add Product
export const addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

// Get all product
export const getAllProducts = async (req, res, next) => {
  // const product = await Product.find();
  const resultPerPage = 4;
  const apihelper = new APIhelper(Product.find(), req.query).Search().Filter();
  const filteredQuery = apihelper.query.clone();
  const productCount = await filteredQuery.countDocuments();

  const totalPages = Math.ceil(productCount / resultPerPage);
  const page = Number(req.query.page) || 1;

  if (totalPages > 0 && page > totalPages) {
    return next(new HandleError("This page doesn't Exist", 404));
  }

  apihelper.Pagination(resultPerPage);

  const product = await apihelper.query;
  res.status(200).json({
    success: true,
    product,
    productCount,
    resultPerPage,
    totalPages,
    currentPage: page,
  });
};

// Get Single Product
export const getSingleProducts = async (req, res, next) => {
  const id = req.params.id;
  let product = await Product.findById(id);
  if (!product) {
    return next(
      new HandleError("Product Not Found ! Please Check the product id", 404)
    );
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
