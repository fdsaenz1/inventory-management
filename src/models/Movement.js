const mongoose = require('mongoose');

const MovementSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  sourceStoreId: { type: String, required: true },
  targetStoreId: { type: String, required: true },
  quantity: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  type: { type: String, enum: ['IN', 'OUT', 'TRANSFER'], required: true },
});

module.exports = mongoose.model('Movement', MovementSchema);
