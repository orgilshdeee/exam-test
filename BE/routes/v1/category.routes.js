const express = require("express");
const router = express.Router();
const categoriesController = require("../../modules/categories");

// router.get("/", categoriesController.getAllCategories);
router.get("/getcategory", categoriesController.getCategory);
router.get("/:id", categoriesController.getById);
// router.post("/", categoriesController.create);
router.put("/", categoriesController.update);
router.delete("/:id", categoriesController.deleteCat);
router.post("/create", categoriesController.createCategory);

module.exports = router;
