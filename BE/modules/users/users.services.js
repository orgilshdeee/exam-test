const { default: mongoose } = require("mongoose");
const Users = require("./user.model");

const createUser = async (req) => {
  const user = new Users(req.body);
  return user.save();
};

const getAllUser = (req) => {
  return Users.find();
};

const updateUser = async (req) => {
  const { id } = req.query;
  console.log(id);
  await Users.findByIdAndUpdate(id, req.body);
  const user = await Users.findById(id);
  return user;
};

const deleteUser = async (req) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const user = await Users.findByIdAndDelete(id);
    return user;
  }
};

const getUserById = async (req) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const user = await Users.findById(id);
    return user;
  }
};
const loginUser = async (req) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email: email, password: password });
  return user;
};

module.exports = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  loginUser,
};
