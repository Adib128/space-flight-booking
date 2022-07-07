const { gql } = require("apollo-server-koa");

const flightSchema = gql `
  type Flight {
    id: ID!
    code: String!
    launchSite: SpaceCenter!
    landingSite: SpaceCenter!
    departureAt: DateTime!
    seatCount: Int!
    availableSeats: Int!
  }

  type FlightPagination {
    pagination: Pagination
    nodes: [Flight!]
  }

  input flightInfo {
    launchSiteId: Int!
    landingSiteId: Int!
    departureAt: DateTime! 
    seatCount: Int!
  }
`;

module.exports = flightSchema;