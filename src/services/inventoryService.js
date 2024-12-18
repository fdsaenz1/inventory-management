const Inventory = require('../models/Inventory');

class InventoryService {
  static async getInventoryByStore(storeId) {
    return Inventory.find({ storeId });
  }

  static async transferProduct({ productId, sourceStoreId, targetStoreId, quantity }) {
    const sourceInventory = await Inventory.findOne({
      productId,
      storeId: sourceStoreId,
    });

    const targetInventory = await Inventory.findOne({
      productId,
      storeId: targetStoreId,
    });

    if (!sourceInventory || sourceInventory.quantity < quantity) {
      throw new Error('Insufficient stock in source store');
    }

    // Deduct stock from source store
    sourceInventory.quantity -= quantity;
    await sourceInventory.save();

    // Add stock to target store
    if (targetInventory) {
      targetInventory.quantity += quantity;
      await targetInventory.save();
    } else {
      await Inventory.create({
        productId,
        storeId: targetStoreId,
        quantity,
        minStock: 5, // Default min stock
      });
    }
  }

  static async getLowStockAlerts() {
    return Inventory.find({ quantity: { $lt: 'minStock' } });
  }
}

module.exports = InventoryService;
