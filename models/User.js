const { getDb } = require("../src/utils/database");

class User {
  addOne(props) {
    const db = getDb();
    return db.collection("users").insertOne({
      ...props,
    });
  }

  getUser(email) {
    const db = getDb();
    return db.collection("users").findOne({ email: email });
  }
  // static fetchAll() {
  //   const db = getDb();
  //   return db
  //     .collection("users")
  //     .find()
  //     .toArray()
  //     .then((users) => users)
  //     .catch((er) => console.log(er));
  // }
}

module.exports = User;
