const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(process.env.DATABASE_URL)
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
