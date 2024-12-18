const express = require('express');
const productController = require('../controllers/productController');
const validateData = require('../middleware/validateData');

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', validateData, productController.createProduct);
router.put('/:id', validateData, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
