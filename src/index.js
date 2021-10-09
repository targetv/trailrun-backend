require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./resources/user/router");
const adminRouter = require("./resources/auth/router");
const cookieParser = require("cookie-parser");
const { validateToken } = require("./utils/authGenerator");

const app = express();

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");
app.use(cors({ origin: "http://localhost:3001", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

/* SETUP ROUTES */

app.use("/", userRouter);
app.use("/", adminRouter);

app.use((req, res, next) => {
  const token = req.cookies.token;
  const userData = validateToken(token);
  console.log(userData);
  if (userData) {
    req.currentUser = userData;
    next();
  } else {
    res
      .status(401)
      .json({ err: "You need to be logged in to access this data" });
  }
});

/*


Secure paths

*/

// app.get("*", (req, res) => {
//   res.json({ ok: true });
// });

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
