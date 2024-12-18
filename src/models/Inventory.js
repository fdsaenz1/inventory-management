const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  storeId: { type: String, required: true },
  quantity: { type: Number, required: true },
  minStock: { type: Number, default: 5 },
}, { timestamps: true });

module.exports = mongoose.model('Inventory', InventorySchema);
