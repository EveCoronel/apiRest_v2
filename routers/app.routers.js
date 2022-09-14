const express = require('express');
const router = express.Router();
const porductsRoutes = require('./productos/products.routes')

router.use('/products',porductsRoutes)


module.exports = router;