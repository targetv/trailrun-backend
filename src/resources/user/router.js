const express = require("express");
const router = express.Router();
const { register, getenteries } = require("./controller");

router.post("/register", register);

module.exports = router;
