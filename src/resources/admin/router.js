const express = require("express");

const router = express.Router();

const { getenteries } = require("./controller");

router.get("/getenteries", getenteries);

module.exports = router;
