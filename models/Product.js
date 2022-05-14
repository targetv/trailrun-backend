const { getDb } = require("../src/utils/database");

class Product {
  save() {
    const db = getDb();
    db.collection("products").insertMany([
      { productname: "Club Member", productprice: "£10" },
      { productname: "Non Club Member", productprice: "£12" },
    ]);
  }
}

module.exports = Product;
