const { MongoClient } = require("mongodb");

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect("mongodb://docker:mongopw@localhost:55000")
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
