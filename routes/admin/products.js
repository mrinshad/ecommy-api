const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');

// Route for inserting a product
router.post('/insertProduct', productController.insertProduct);
router.get('/getApprovedProducts',productController.getApprovedProducts);
router.get('/getProducts',productController.getProducts);
router.post('/approveProduct',productController.getapproveProduct);
router.post('/rejectProduct',productController.getRejectProduct);
// Export the router
module.exports = router;
