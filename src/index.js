require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../graphql/schema");
const graphqlResolver = require("../graphql/resolvers");

const cookieParser = require("cookie-parser");
const { validateToken } = require("./utils/authGenerator");
const { mongoConnect } = require("./utils/database");

const app = express();

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

/* SETUP ROUTES */

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

// app.get("*", (req, res) => {
//   res.json({ ok: true });
// });

/* START SERVER */

const port = process.env.PORT || 3030;

mongoConnect(() => {
  app.listen(port, () => {
    console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
  });
});
