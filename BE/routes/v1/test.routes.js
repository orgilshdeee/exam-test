const express = require("express");
const router = express.Router();
const testController = require("../../modules/test/test.controller");

router.post("/", testController.create);
router.get("/", testController.getAll);

module.exports = router;
