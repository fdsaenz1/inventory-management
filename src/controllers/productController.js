const Product = require('../models/Product');
const productService = require('../services/productService');

// Get all products with optional filters
exports.getProducts = async (req, res, next) => {
  try {
    const filters = req.query;
    const products = await productService.getAllProducts(filters);
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

// Get product by ID
exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

// Create a new product
exports.createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const newProduct = await productService.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

// Update a product
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const updatedProduct = await productService.updateProduct(id, productData);
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

// Delete a product
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await productService.deleteProduct(id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
