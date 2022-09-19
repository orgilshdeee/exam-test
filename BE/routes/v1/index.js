const express = require("express");
const router = express.Router();
const rolesRoute = require("../v1/roles.routes");
const auctionBidRoute = require("../v1/auctionBid.routes");
const usersRoute = require("../v1/users.routes");
const paymentRoute = require("../v1/payment.routes");
const productRoute = require("../v1/product.routes");
const companyRoute = require("./company.routes");
const categoryRoute = require("../v1/category.routes");
const orderRoute = require("./orders.routes");

router.use("/orders", orderRoute);
router.use("/roles", rolesRoute);
router.use("/users", usersRoute);
router.use("/payment", paymentRoute);
router.use("/products", productRoute);
router.use("/company", companyRoute);
router.use("/category", categoryRoute);
router.use("/auction", auctionBidRoute);

module.exports = router;
