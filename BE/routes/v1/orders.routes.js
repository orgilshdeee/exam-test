const express = require("express");
const router = express.Router();
const rolesController = require("../../modules/orders");

router.post("/", rolesController.create);
router.get("/", rolesController.getAll);
router.get("/:id", rolesController.getById);
router.put("/", rolesController.updateOrder);
router.delete("/:id", rolesController.deleteOrder);

module.exports = router;
