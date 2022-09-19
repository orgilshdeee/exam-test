const Stripe = require("stripe");
require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const payment = async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Auction",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.setHeader();
    res.json({
      message: "Payment succesful",
      success: true,
      data: payment,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
};

module.exports = { payment };
