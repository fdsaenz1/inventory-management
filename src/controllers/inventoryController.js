const inventoryService = require('../services/inventoryService');

// Get inventory by store ID
exports.getInventoryByStore = async (req, res, next) => {
  try {
    const { id: storeId } = req.params;
    const inventory = await inventoryService.getInventoryByStore(storeId);
    res.status(200).json(inventory);
  } catch (err) {
    next(err);
  }
};

// Transfer products between stores
exports.transferInventory = async (req, res, next) => {
  try {
    const transferData = req.body;
    const result = await inventoryService.transferInventory(transferData);
    res.status(200).json({ message: 'Transfer successful', result });
  } catch (err) {
    next(err);
  }
};

// List inventory alerts for low stock
exports.getInventoryAlerts = async (req, res, next) => {
  try {
    const alerts = await inventoryService.getInventoryAlerts();
    res.status(200).json(alerts);
  } catch (err) {
    next(err);
  }
};
