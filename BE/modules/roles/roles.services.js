const Roles = require("./role.model");

const createRole = async (req) => {
  const roles = new Roles(req.body);
  return roles.save();
};

const getAll = (req) => {
  return Roles.find();
};

const updateRole = async (req) => {
  const { id } = req.query;
  await Roles.findByIdAndUpdate(id, req.body);
  const role = await Roles.findById(id);
  return role;
};

const deleteRole = async (req) => {
  const { id } = req.params;
  const role = await Roles.findByIdAndDelete(id);
  return role;
};

const getById = async (req) => {
  const { id } = req.params;
  const role = await Roles.findById(id);
  return role;
};

module.exports = { getAll, createRole, updateRole, deleteRole, getById };
