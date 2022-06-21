const express = require("express");
const router = express.Router();
const {
  getCartById,
  createCart,
  addProductToCart,
  deleteCartById,
  deleteProductCart,
} = require("../controllers/cart-controller");

router.get("/:id/productos", getCartById); // Traigo el carrito con ese id
router.post("/", createCart); // Creo un carrito
router.post("/:id/productos", addProductToCart); //
router.delete("/:id/productos", deleteCartById);
router.delete("/:id/productos/:idProd", deleteProductCart);

module.exports = router;
