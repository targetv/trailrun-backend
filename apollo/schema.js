const { gql } = require("apollo-server");

const typeDefs = gql`
  input NewUser {
    firstname: String!
    lastname: String!
    email: String!
    dob: String!
    address: String!
    postcode: String!
    telephonenumber: String!
    gender: String!
    ageonraceday: Int!
    shirtsize: String!
    signature: String!
    orderstatus: String
    clubname: String
    clubmember: String
    registrationnumber: String
  }

  input GetUserByEmail {
    email: String!
  }

  input GetUserById {
    id: ID!
  }

  type Response {
    success: Boolean!
    userId: ID
  }

  type Mutation {
    CreateNewUser(input: NewUser): Response
    UpdatePaymentStatus(input: GetUserById): Response
  }
  type Query {
    Users: [User!]!
    User(input: GetUserByEmail): User
    UserById(input: GetUserById): User
  }

  type User {
    _id: ID!
    firstname: String!
    lastname: String!
    email: String!
    dob: String!
    address: String!
    postcode: String!
    telephonenumber: String!
    gender: String!
    ageonraceday: Int!
    shirtsize: String!
    orderstatus: String
    clubname: String
    clubmember: String
    registrationnumber: String
  }
`;

module.exports = typeDefs;
