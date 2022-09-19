const paymentService = require("./payment.service");

const payment = async (req, res) => {
  try {
    const payment = await paymentService.payment(req, res);
    res.json({ data: payment });
  } catch (error) {
    console.error(error);
    res.json({ error: error });
  }
};

module.exports = { payment };
