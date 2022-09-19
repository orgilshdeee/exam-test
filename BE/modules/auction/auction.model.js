const mongoose = require("mongoose");
const Schema = require("mongoose");

const AuctionBidSchema = new mongoose.Schema({
  auction_status: {
    type: String,
  },
  auction_name: {
    type: String,
  },
  auction_description: {
    type: String,
  },
  auction_seller_id: {
    type: Number,
  },
  auction_item_image: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  bidding_start_time: {
    type: String,
  },
  bidding_end_time: {
    type: String,
  },
  starting_bid: {
    type: Number,
  },
  min_starting_bid: {
    type: Number,
  },
  max_ending_bid: {
    type: Number,
  },
  ending_bid: {
    type: Number,
  },
  // Bids: [
  //   {
  //     bidder: { type: Schema.Types.ObjectId, ref: "Users" },
  //     bid: Number,
  //     time: Date,
  //   },
  // ],
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

const AuctionBid = mongoose.model("auctionBid", AuctionBidSchema);
module.exports = AuctionBid;
