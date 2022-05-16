const resolvers = {
  Query: {
    // returns array of users
    Users: (_, __, { dataSources: { users } }) => users.getUsers(),
    User: async (_, { input }, { dataSources: { users } }) => {
      return await users.getUser(input);
    },
    UserById: async (_, { input }, { dataSources: { users } }) => {
      return await users.getUserById(input);
    },
  },
  Mutation: {
    CreateNewUser: async (_, user, { dataSources: { users } }) => {
      const newUser = await users.createNewUser({ ...user.input });
      return {
        success: true,
        userId: newUser.insertedId,
      };
    },
    UpdatePaymentStatus: async (_, { input }, { dataSources: { users } }) => {
      const updatedUser = await users.updatePaymentStatus(input).toArray();
      console.log(updatedUser);
      return {
        success: true,
      };
    },
  },
};

module.exports = resolvers;
