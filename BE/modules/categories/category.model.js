const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      // unique: true
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    status:{
      trim: true,
      type : String,
    },
    parentId: {
      type: String,
      default:null,
      trim: true,
    },
  },
  { timestamps: true }
);
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
