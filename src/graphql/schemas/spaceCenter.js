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

  extend type Query {
    spaceCenters(page: Int = 1, pageSize: Int = 10): SpaceCenterPagination!
    spaceCenter(id: ID, uid: String): SpaceCenter!
  }
`;

module.exports = spaceCenterSchema;