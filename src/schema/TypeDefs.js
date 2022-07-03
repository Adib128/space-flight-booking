const { gql } = require("apollo-server-koa");

const typeDefs = gql `
  type Planet {
    id: Int!
    name: String!
    code: String!
  }

  #Queries
  type Query {
    planets: [Planet!]!
  }
`;

module.exports = { typeDefs }