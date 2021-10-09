const express = require("express");
const router = express.Router();

const {
  AdminRegister,
  AdminLogin,
  validateLoggedInToken,
} = require("./controller");

router.post("/AdminRegister", AdminRegister);
router.post("/AdminLogin", AdminLogin);
router.get("/ValidateToken", validateLoggedInToken);

module.exports = router;
