const { MongoDataSource } = require("apollo-datasource-mongodb");
const ObjectId = require("mongodb").ObjectId;

class Users extends MongoDataSource {
  getUsers() {
    return this.collection.find().toArray();
  }
  async getUser(input) {
    return this.collection.findOne({ email: input.email });
  }
  createNewUser(user) {
    return this.collection.insertOne(user);
  }
  async getUserById(input) {
    return this.collection.findOne({ _id: ObjectId(input) });
  }
  updatePaymentStatus(input) {
    console.log(input.id);
    return this.collection.aggregate([
      {
        $match: {
          _id: new ObjectId(input.id),
        },
      },
      {
        $addFields: {
          paymentstatus: "completed",
        },
      },
      {
        $merge: {
          into: "users",
        },
      },
    ]);
  }
}

module.exports = Users;
