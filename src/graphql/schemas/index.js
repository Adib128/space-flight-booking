const { gql } = require("apollo-server-koa");
const planetSchema = require("./planet");
const spaceCenterSchema = require("./spaceCenter");
const flightSchema = require("./flight");
const bookingSchema = require("./booking");


const baseSchema = gql `
  type Query {
    planets: [Planet!]!
    spaceCenters(page: Int, pageSize: Int): SpaceCenterPagination!
    spaceCenter(id: ID, uid: String): SpaceCenter!
    flights(from: Int, to: Int, page: Int, pageSize: Int): FlightPagination!
    flight(id: ID!): Flight!
    bookings(page: Int, pageSize: Int, email: String): BookingPagination!
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
`;

module.exports = [
    baseSchema,
    planetSchema,
    spaceCenterSchema,
    flightSchema,
    bookingSchema,
];