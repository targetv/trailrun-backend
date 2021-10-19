const express = require("express");

const router = express.Router();

const { getenteries, ageCategory } = require("./controller");

router.get("/getenteries", getenteries);
router.post("/agecategory", ageCategory);

module.exports = router;
