const rolesServices = require("./roles.services");

const create = async (req, res) => {
  try {
    const role = await rolesServices.createRole(req);
    res.json({
      data: role,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

const deleteRole = async (req, res) => {
  try {
    const role = await rolesServices.deleteRole(req);
    res.json({
      success: true,
      data: role,
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};

const update = async (req, res) => {
  const role = await rolesServices.updateRole(req);
  res.json({
    data: role,
  });
};

const getAll = async (req, res) => {
  const roles = await rolesServices.getAll(req);
  res.json({
    data: roles,
  });
};

const getById = async (req, res) => {
  try {
    const role = await rolesServices.getById(req);
    res.json({
      success: true,
      data: role,
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { create, deleteRole, update, getAll, getById };
