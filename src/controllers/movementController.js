const movementService = require('../services/movementService');

// Get all movement records
exports.getMovements = async (req, res, next) => {
  try {
    const movements = await movementService.getAllMovements();
    res.status(200).json(movements);
  } catch (err) {
    next(err);
  }
};
