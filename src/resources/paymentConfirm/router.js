const express = require("express");
const { paymentStatus } = require("./controller");

const router = express.Router();

router.post("/payment-status", paymentStatus);

module.exports = router;
