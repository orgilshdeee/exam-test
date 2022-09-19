const express = require("express");
const router = express.Router();

const testRoute = require("./test.routes");

router.use("/test", testRoute);

module.exports = router;
