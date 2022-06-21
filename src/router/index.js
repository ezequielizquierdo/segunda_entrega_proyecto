var express = require('express');
var router = express.Router();

var products = require('./products');
var carts = require('./carts');

router.use('/productos', products);
router.use('/carritos', carts);

module.exports = router;