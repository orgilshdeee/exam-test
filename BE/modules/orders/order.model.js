const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_title: {
    type: String,
    require: true,
    unique: true,
  },
  order_status: {
    type: String,
    require: true,
  },
  auction_id: {
    type: String,
    require: true,
  },
  bid_id: {
    type: String,
    require: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  order_price: {
    type: String,
    require: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Orders = mongoose.model("Orders", orderSchema);

module.exports = Orders;
