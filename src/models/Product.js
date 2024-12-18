const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: { type: String, required: true },
  price: { type: Number, required: true },
  sku: { type: String, unique: true, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
