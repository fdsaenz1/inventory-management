const Product = require('../models/Product');

class ProductService {
  static async getAllProducts(filters, pagination) {
    const query = {};

    if (filters.category) {
      query.category = filters.category;
    }

    if (filters.price) {
      query.price = { $lte: filters.price.max, $gte: filters.price.min };
    }

    if (filters.stock !== undefined) {
      query.stock = { $lte: filters.stock };
    }

    return Product.find(query)
      .skip(pagination.page * pagination.limit)
      .limit(pagination.limit);
  }

  static async getProductById(id) {
    return Product.findById(id);
  }

  static async createProduct(productData) {
    const product = new Product(productData);
    return product.save();
  }

  static async updateProduct(id, updateData) {
    return Product.findByIdAndUpdate(id, updateData, { new: true });
  }

  static async deleteProduct(id) {
    return Product.findByIdAndDelete(id);
  }
}

module.exports = ProductService;
