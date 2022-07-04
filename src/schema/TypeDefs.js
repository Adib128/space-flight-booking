const { gql } = require("apollo-server-koa");

const typeDefs = gql `

  type Planet {
    id: ID!
    name: String!
    code: String!
    spaceCenters(limit: Int): [SpaceCenter!]
  }

  type SpaceCenter {
    id: ID!
    uid: String!
    description: String!
    latitude: Float!
    longitude: Float!
    planet: Planet!
  }

  type Pagination {
    total: Int!
    page: Int!
    pageSize: Int!
  }

  type SpaceCenterPagination {
    pagination: Pagination
    nodes: [SpaceCenter!]
  }

  #Queries
  type Query {
    planets: [Planet!]!
    spaceCenters(page: Int, pageSize: Int): SpaceCenterPagination!
    spaceCenter(id: ID, uid: String): SpaceCenter!
  }
`;

module.exports = { typeDefs }