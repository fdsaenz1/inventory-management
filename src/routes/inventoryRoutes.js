const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

router.get('/alerts', inventoryController.getInventoryAlerts);
router.get('/:id/inventory', inventoryController.getInventoryByStore);
router.post('/transfer', inventoryController.transferInventory);

module.exports = router;
