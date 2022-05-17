const { MongoClient } = require("mongodb");
require("dotenv").config();
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://targetv:Magic1998&&@cluster0.qhk1u.mongodb.net/test"
  )
    .then((client) => {
      console.log("Server has connected");
      _db = client.db();
      callback();
    })
    .catch((e) => {
      throw e;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Db Connection";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
