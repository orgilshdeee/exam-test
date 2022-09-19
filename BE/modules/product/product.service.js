const Product = require("./product.model");
const mongoose = require("mongoose");

const createProduct = async (req) => {
  let form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Video could not be uploaded",
      });
    }
    // const product = new Product(req.body.result);
    // return product.save();
  });
  let newProduct = new Product(fields);
};
const getAll = (req) => {
  return Product.find();
};

const updateProduct = async (req) => {
  const { id } = req.query;
  await Product.findByIdAndUpdate(id, req.body);
  const product = await Product.findById(id);
  return product;
};

const deleteProduct = async (req) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  return product;
};

const getById = async (req) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const product = await Product.findById(id);
    return product;
  }
};

module.exports = {
  getAll,
  createProduct,
  updateProduct,
  deleteProduct,
  getById,
};
