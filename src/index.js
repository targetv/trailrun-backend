require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./resources/user/router");
const authRouter = require("./resources/auth/router");
const adminRouter = require("./resources/admin/router");
const paypalRouter = require("./resources/paypal/router");
const orderRouter = require("./resources/order/router");
const paymentRouter = require("./resources/paymentConfirm/router");
const cookieParser = require("cookie-parser");
const { validateToken } = require("./utils/authGenerator");

const app = express();

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");
app.use(cors({ credentials: true }));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

/* SETUP ROUTES */

app.use("/", userRouter);
app.use("/", authRouter);
app.use("/", paypalRouter);
app.use("/", orderRouter);
app.use("/", paymentRouter);

app.use((req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json("You need to be logged in to access this data");
  }

  const userData = validateToken(token);

  if (userData) {
    req.currentUser = userData;
    console.log("passed Auth", userData);
    next();
  } else {
    res
      .status(401)
      .json({ err: "You need to be logged in to access this data" });
  }
});

// Secure Routes

app.use("/", adminRouter);

// app.get("*", (req, res) => {
//   res.json({ ok: true });
// });

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
