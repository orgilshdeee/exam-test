const companyServices = require("./company.service");

const create = async (req, res) => {
  try {
    const role = await companyServices.creatCompany(req);
    res.json({
      data: role,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const role = await companyServices.deleteCompany(req);
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

const updateInfo = async (req, res) => {
  const role = await companyServices.updateCompany(req);
  res.json({
    data: role,
  });
};

const getAll = async (req, res) => {
  try {
    const roles = await companyServices.getAll(req);

    res.json({
      success: true,
      data: roles,
    });
  } catch (err) {
    res.json({ success: false, data: err });
  }
};

const getById = async (req, res) => {
  try {
    const role = await companyServices.getById(req);
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
module.exports = { create, getAll, updateInfo, deleteCompany, getById };
