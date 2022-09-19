const productService = require("./product.service");
// const mongoose = require('mongoose')
// mongoose.connection.on("connected", () => {
//   gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
// });

const create = async (req, res) => {
  try {
    const product = await productService.createProduct(req);
    res.json({
      data: product,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req);
    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};

const update = async (req, res) => {
  const product = await productService.updateProduct(req);
  res.json({
    data: product,
  });
};

const getAll = async (req, res) => {
  const product = await productService.getAll(req);
  res.json({
    data: product,
  });
};

const getById = async (req, res) => {
  try {
    const product = await productService.getById(req);
    res.json({ success: true, data: product });
  } catch (err) {
    res.json({ success: false, data: err });
  }
};

module.exports = { create, deleteProduct, update, getAll, getById };
