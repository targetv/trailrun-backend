const { getDb } = require("../src/utils/database");

class Order {
  addOne(props) {
    const db = getDb();
    return db.collection("orders").insertOne({
      ...props,
    });
  }
}

module.exports = Order;

// import { getDb } from "../src/utils/database";

// class Order {
//   constructor(userId, productId) {
//     this.userId = userId;
//     this.productId = productId;
//   }
//   save(){
//     const db = getDb()
//     db.
//   }

// }
