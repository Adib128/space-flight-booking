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

  type Booking {
    id: ID!
    flight: Flight!
    seatCount: Int!
    email: String!
  }

  type BookingPagination {
    pagination: Pagination
    nodes: [Booking!]
  }

  #Queries
  type Query {
    planets: [Planet!]!
    spaceCenters(page: Int, pageSize: Int): SpaceCenterPagination!
    spaceCenter(id: ID, uid: String): SpaceCenter!
    flights(page: Int, pageSize: Int): FlightPagination!
    flight(id: ID!): Flight!
    bookings(page: Int, pageSize: Int, email: String): BookingPagination!
    booking(id: ID!): Booking!
  }

  scalar DateTime
`;

module.exports = { typeDefs }