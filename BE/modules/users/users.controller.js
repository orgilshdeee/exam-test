const usersServices = require("./users.services");

const createUser = async (req, res) => {
  try {
    const user = await usersServices.createUser(req);
    res.json({
      data: user,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await usersServices.deleteUser(req);
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};

const updateUser = async (req, res) => {
  const user = await usersServices.updateUser(req);
  res.json({
    data: user,
  });
};

const getAllUser = async (req, res) => {
  const user = await usersServices.getAllUser(req);
  res.json({
    data: user,
  });
};

const getUserById = async (req, res) => {
  const user = await usersServices.getUserById(req);
  res.json({
    data: user,
  });
};
const loginUser = async (req, res) => {
  try {
    const user = await usersServices.loginUser(req);
    res.json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "User name or password doesn't match",
    });
  }
};

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getAllUser,
  getUserById,
  loginUser,
};
