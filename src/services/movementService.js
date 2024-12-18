const Movement = require('../models/Movement');

class MovementService {
  static async logMovement({ productId, sourceStoreId, targetStoreId, quantity, type }) {
    const movement = new Movement({
      productId,
      sourceStoreId,
      targetStoreId,
      quantity,
      timestamp: new Date(),
      type,
    });

    return movement.save();
  }

  static async getMovementsByProduct(productId) {
    return Movement.find({ productId });
  }

  static async getMovementsByStore(storeId) {
    return Movement.find({
      $or: [{ sourceStoreId: storeId }, { targetStoreId: storeId }],
    });
  }
}

module.exports = MovementService;
