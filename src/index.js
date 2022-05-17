require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const resolvers = require("../apollo/resolvers");
const typeDefs = require("../apollo/schema");
const { ApolloServer } = require("apollo-server");
const UserAPI = require("../apollo/datasources/users-api");
const { getDb } = require("../src/utils/database");
const cookieParser = require("cookie-parser");
const { validateToken } = require("./utils/authGenerator");
const { mongoConnect } = require("./utils/database");
const stripe = require("stripe")(process.env.STRIPESK);

const app = express();

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* SETUP ROUTES */

// app.use((req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     res.status(401).json("You need to be logged in to access this data");
//   }

//   const userData = validateToken(token);

//   if (userData) {
//     req.currentUser = userData;
//     console.log("passed Auth", userData);
//     next();
//   } else {
//     res
//       .status(401)
//       .json({ err: "You need to be logged in to access this data" });
//   }
// });

// Secure Routes

// app.get("*", (req, res) => {
//   res.json({ ok: true });
// });

/* START SERVER */

// Sign in to see your own test API key embedded in code samples.

app.use(express.static("public"));
// Calculates the price of the items.
const calculateOrderAmount = (item) => {
  console.log(item);
  if (item === "None Club Member") {
    return 1400;
  } else {
    return 1200;
  }
};

// Rest api end point for creating payment intents for stripe

app.post("/create-payment-intent", async (req, res) => {
  const { item, email } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    receipt_email: email,
    amount: calculateOrderAmount(item),
    currency: "gbp",
    description: "Coxhoe Trail Run Entry",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

const port = process.env.PORT || 4242;

//Callback function for when the mongo db connection has been made, this will allow the express and graphql server functions to start up.
mongoConnect(() => {
  const db = getDb();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Look at this when landed due to not possibly being correct
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
      csrfPrevention: true,
    },
    dataSources: () => {
      return {
        users: new UserAPI(db.collection("users")),
      };
    },
  });
  server.listen().then((resp) => {
    console.log("Apollo server is on Port 4000");
  });
  app.listen(port, () => {
    console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
  });
});
