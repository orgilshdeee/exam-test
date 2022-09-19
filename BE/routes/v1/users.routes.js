const express = require("express");
const router = express.Router();
const usersController = require("../../modules/users");

router.get("/", usersController.getAllUser);
router.get("/:id", usersController.getUserById);
router.post("/create", usersController.createUser);
router.put("/update", usersController.updateUser);
router.delete("/delete/:id", usersController.deleteUser);
router.post("/login", usersController.loginUser);

module.exports = router;
