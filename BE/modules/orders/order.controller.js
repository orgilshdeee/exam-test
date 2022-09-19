const orderServices = require("./order.services");

const create = async (req, res) => {
  try {
    const order = await orderServices.createOrder(req);
    res.json({
      data: order,
    });
  } catch (error) {
    res.json({
      success: "false",
      error: error,
    });
  }
};
const updateOrder = async (req, res) => {
  const order = orderServices.updateOrder(req);
  res.json({
    data: "updated",
  });
};

const deleteOrder = async (req, res) => {
  try {
    const order = await orderServices.deleteOrder(req);
    res.json({
      success: "true",
      data: order,
    });
  } catch (error) {
    res.json({
      success: "false",
      error: error,
    });
  }
};

const getAll = async (req, res) => {
  const order = await orderServices.getAll(req);
  res.json({
    data: order,
  });
};

const getById = async (req, res) => {
  try {
    const order = await orderServices.getById(req);
    res.json({
      success: "true",
      data: order,
    });
  } catch (error) {
    res.json({
      success: "false",
      error: error,
    });
  }
};

module.exports = { create, updateOrder, deleteOrder, getAll, getById };
