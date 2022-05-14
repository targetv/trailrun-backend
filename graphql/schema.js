const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
} = require("graphql");

const User = require("../models/User");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    firstname: { type: new GraphQLNonNull(GraphQLString) },
    lastname: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    dob: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: new GraphQLNonNull(GraphQLString) },
    postcode: { type: new GraphQLNonNull(GraphQLString) },
    telephonenumber: { type: new GraphQLNonNull(GraphQLString) },
    gender: { type: new GraphQLNonNull(GraphQLString) },
    ageonraceday: { type: GraphQLInt },
    shirtsize: { type: new GraphQLNonNull(GraphQLString) },
    clubmember: { type: GraphQLBoolean },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserType,
      args: { email: { type: GraphQLString } },
      resolve(parent, args) {
        const user = new User();
        return user.getUser(args.email);
      },
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstname: { type: new GraphQLNonNull(GraphQLString) },
        lastname: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        dob: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        postcode: { type: new GraphQLNonNull(GraphQLString) },
        telephonenumber: { type: new GraphQLNonNull(GraphQLString) },
        gender: { type: new GraphQLNonNull(GraphQLString) },
        ageonraceday: { type: GraphQLInt },
        shirtsize: { type: new GraphQLNonNull(GraphQLString) },
        clubmember: { type: GraphQLBoolean },
      },
      resolve(parent, args) {
        const user = new User();
        return user.addOne({ ...args });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

// const graphql = require('graphql');
// const _ = require('lodash')
// const { GraphQlObjectType, new GraphQLNonNull(GraphQLString),GraphQLSchema,buildSchema } =
//     graphql;
// var books=[
//     {name:'Hezaro yek Shab',gener:'romans',id:1},
//     {name:'Fergosen memorizes',gener:'sport',id:2},
//     {name:'Hpliday physics',gener:'sience',id:3}
// ];

// const BookType = new GraphQlObjectType({
//     name: 'Book',
//     fields: () => ({
//         id: { type: new GraphQLNonNull(GraphQLString) },
//         title: { type: new GraphQLNonNull(GraphQLString) },
//         gener: { type: new GraphQLNonNull(GraphQLString) }
//     })
// });

// const RootQuery=new GraphQlObjectType({
//     name:'RootQueryType',
//     fields:{
//         book:{
//             type:BookType,
//             args:{ id: { type: new GraphQLNonNull(GraphQLString) }},
//             resolve(parent,args){
//                return _.find(books,{id:args.id});
//             }
//         }
//     },

// });
// module.exports=new GraphQLSchema({
//     query:RootQuery
// });

// module.exports = buildSchema(`

//     input UserInputData{
//         {
//             firstname: String!
//             lastname: String!
//             email: String!
//             dob: String!
//             address: String!
//             postcode: String!
//             telephonenumber: String!
//             gender: String!
//             ageonraceday: Int!
//             shirtsize: String!
//             clubmember:
//         }
//     }

//     type RootMutation{
//         createUser(UserInputData)
//     }

//     schema{
//         mutation: RootMutation
//     }
// `);
