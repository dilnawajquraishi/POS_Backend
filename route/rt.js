const express = require('express');
const router = express.Router();
const { addProduct } = require('./procotroller');

// Route to handle GET requests for adding a product
router.get('/add-product', addProduct);

module.exports = router;
