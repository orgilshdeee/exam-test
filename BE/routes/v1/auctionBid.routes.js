const express = require("express");
const router = express.Router();
const auctionBidController = require("../../modules/auction");

router.get("/", auctionBidController.getAllAuction);
router.get("/:id", auctionBidController.getById);
router.post("/", auctionBidController.createAuction);
router.put("/", auctionBidController.updateAuction);
router.delete("/:id", auctionBidController.deleteAuction);

module.exports = router;
