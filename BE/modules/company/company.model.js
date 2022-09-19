const mongoose = require("mongoose");
const Schema = require("mongoose");
const Role = require("../roles/role.model");
const CompanySchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    minlength: 8,
  },
  role_id: {
    type: Schema.Types.ObjectId,
    ref: Role,
  },
});
const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
