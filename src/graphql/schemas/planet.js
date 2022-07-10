const { gql } = require("apollo-server-koa");
const planetSchema = gql `
  type Planet {
    id: ID!
    name: String!
    code: String!
    spaceCenters(limit: Int = 5): [SpaceCenter!]
  }

  extend type Query {
    planets: [Planet!]!
  }
`;

module.exports = planetSchema;