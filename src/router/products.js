const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
  getProductById,
} = require("../controllers/products-controller");

router.get('/', getProducts)
router.get('/:id', getProductById )
router.post('/', createProduct);
router.put('/:id', updateProductById)
router.delete('/:id', deleteProductById)

module.exports = router;
