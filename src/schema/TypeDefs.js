const { gql } = require("apollo-server-koa");

const typeDefs = gql `
  type User {
    name: String!
    age: Int!
  }

  #Queries
  type Query{
    getAllUsers: [User!]!
  }
`;

module.exports = { typeDefs }