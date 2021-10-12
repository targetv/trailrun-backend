const express = require("express");
const { saveOrder, getOrder } = require("./controller");
const router = express.Router();

router.post("/save-order", saveOrder);
router.post("/find-order", getOrder);

module.exports = router;
