const express = require("express");
const router = express.Router();
const productController = require("../../modules/product");

router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", productController.create);
router.put("/", productController.update);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
