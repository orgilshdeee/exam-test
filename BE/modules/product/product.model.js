const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
  },
  odometer: {
    type: Number,
  },
  primary_damage: {
    type: String,
    default: "0%",
  },
  body_style: {
    type: String,
  },
  vehicle_type: {
    type: String,
  },
  color: {
    type: String,
  },
  fuel: {
    type: String,
  },
  engine_type: {
    type: String,
  },
  cylinders: {
    type: Number,
  },
  category_id: {
    type: Number,
  },
  product_status: {
    type: Boolean,
    default: true,
  },
  imgUrl: {
    type: String,
  },
  price: {
    type: Number,
    default: 1000,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
