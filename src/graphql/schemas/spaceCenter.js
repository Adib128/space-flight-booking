const { gql } = require("apollo-server-koa");
const spaceCenterSchema = gql `
  type SpaceCenter {
    id: ID!
    uid: String!
    name: String!
    description: String!
    latitude: Float!
    longitude: Float!
    planet: Planet!
  }

  type SpaceCenterPagination {
    pagination: Pagination
    nodes: [SpaceCenter!]
  }
`;

module.exports = spaceCenterSchema;