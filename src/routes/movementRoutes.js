const express = require('express');
const movementController = require('../controllers/movementController');

const router = express.Router();

router.get('/', movementController.getMovements);

module.exports = router;
