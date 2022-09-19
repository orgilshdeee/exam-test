const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  test_name: {
    type: String,
    require: true,
    unique: true,
  },
  test_status: {
    type: String,
    require: true,
  },
  test_price: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Tests = mongoose.model("Tests", testSchema);

module.exports = Tests;
