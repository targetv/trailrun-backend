const prisma = require("../../utils/database");
const dotenv = require("dotenv").config();
const paypal = require("@paypal/checkout-server-sdk");

let clientId = process.env.PAYPAL_CLIENT_ID;
let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

const storeItems = new Map([
  [1, { price: 12, name: "None Club Member" }],
  [2, { price: 10, name: "Club Member" }],
]);

const createOrder = async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest();
  let total = req.body.items.map((item) => {
    let sum = 0;
    return (sum += storeItems.get(item.id).price * item.quantity);
  });
  total = total.toString();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "GBP",
          value: total,
        },
      },
    ],
  });
  try {
    const order = await client.execute(request);
    res.json({ id: order.result.id });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error });
  }
};

module.exports = { createOrder };
