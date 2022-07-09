const { gql } = require("apollo-server-koa");
const planetSchema = require("./planet");
const spaceCenterSchema = require("./spaceCenter");
const flightSchema = require("./flight");
const bookingSchema = require("./booking");


const baseSchema = gql `
  type Query {
    planets: [Planet!]!
    spaceCenters(page: Int = 1, pageSize: Int = 10): SpaceCenterPagination!
    spaceCenter(id: ID, uid: String): SpaceCenter!
    flights(
      from: Int
      to: Int
      seatCount: Int
      departureDay: Date
      page: Int = 1
      pageSize: Int = 10
    ): FlightPagination!
    flight(id: ID!): Flight!
    bookings(
      page: Int = 1
      pageSize: Int = 10
      email: String
    ): BookingPagination!
    booking(id: ID!): Booking!
  }

  type Mutation {
    scheduleFlight(input: flightInfo): Flight
    bookFlight(input: bookingInfo): Booking
  }

  type Pagination {
    total: Int!
    page: Int!
    pageSize: Int!
  }

  scalar DateTime
  scalar Date
`;

module.exports = [
    baseSchema,
    planetSchema,
    spaceCenterSchema,
    flightSchema,
    bookingSchema,
];