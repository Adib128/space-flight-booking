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

  extend type Query {
    flights(
      from: Int
      to: Int
      seatCount: Int!
      departureDay: Date
      page: Int = 1
      pageSize: Int = 10
    ): FlightPagination!
    flight(id: ID!): Flight!
  }

  extend type Mutation {
    bookFlight(input: bookingInfo): Booking!
  }
`;

module.exports = flightSchema;