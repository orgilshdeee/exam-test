const Schema = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  role_id: {
    type: Schema.Types.ObjectId,
    ref: "Roles",
  },
  user_status: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
