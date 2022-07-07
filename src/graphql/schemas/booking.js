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
`;

module.exports = bookingSchema;