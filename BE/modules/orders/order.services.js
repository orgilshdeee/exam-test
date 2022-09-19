const Orders = require("./order.model");

const createOrder = async (req) => {
  const orders = new Orders(req.body);
  return orders.save();
};

const updateOrder = async (req) => {
  const { id } = req.query;
  const order = await Orders.findByIdAndUpdate(id, req.body);
  return order;
};

const deleteOrder = async (req) => {
  const { id } = req.params;
  const order = await Orders.findByIdAndDelete(id);
  return order;
};

const getAll = async (req) => {
  return await Orders.find();
};

const getById = async (req) => {
  const { id } = req.params;
  const role = await Orders.findById(id);
  return role;
};

module.exports = { createOrder, updateOrder, deleteOrder, getAll, getById };
