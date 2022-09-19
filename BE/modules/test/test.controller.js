const testServices = require("./test.service");

const create = async (req, res) => {
  try {
    const test = await testServices.createTest(req);
    res.json({
      success: true,
      data: test,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    });
  }
};

const getAll = async (req, res) => {
  const test = await testServices.getAll(req);
  res.json({
    data: test,
  });
};

module.exports = { create, getAll };
