const Tests = require("./test.model");

const createTest = async (req) => {
  const test = new Tests(req.body);
  console.log(test);
  return test.save();
};

const getAll = async (req) => {
  return await Tests.find();
};

module.exports = { createTest, getAll };
