const express = require("express");
const { createOrder } = require("./controller");

const router = express.Router();

router.post("/create-order", createOrder);

module.exports = router;
