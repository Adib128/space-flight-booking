const { gql } = require("apollo-server-koa");
const bookingSchema = gql `
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

  input bookingInfo {
    seatCount: Int!
    flightId: Int!
    email: String!
  }

  extend type Query {
    bookings(
      page: Int = 1
      pageSize: Int = 10
      email: String
    ): BookingPagination!
    booking(id: ID!): Booking!
  }

  extend type Mutation {
    scheduleFlight(input: flightInfo): Flight!
  }
`;

module.exports = bookingSchema;