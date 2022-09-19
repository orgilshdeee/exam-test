const Company = require("./company.model");

const creatCompany = async (req) => {
  const roles = new Company(req.body);
  return roles.save();
};

const getAll = async (req) => {
  const data = await Company.find()
    .populate("role_id", "_id role_status role_name")
    .exec();
  return data;
};

const updateCompany = async (req) => {
  const { id } = req.query;
  await Company.findByIdAndUpdate(id, req.body);
  const role = await Company.findById(id);
  return role;
};

const deleteCompany = async (req) => {
  const { id } = req.params;
  const role = await Company.findByIdAndDelete(id);
  return role;
};

const getById = async (req) => {
  const { id } = req.params;
  const company = await Company.findById(id);
  return company;
};

module.exports = {
  creatCompany,
  getAll,
  updateCompany,
  deleteCompany,
  getById,
};
