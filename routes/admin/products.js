const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');

// Route for inserting a product
router.post('/insertProduct', productController.insertProduct);
router.get('/getProducts',productController.getProducts);
// Export the router
module.exports = router;
