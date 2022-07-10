const { gql } = require("apollo-server-koa");
const planetSchema = require("./planet");
const spaceCenterSchema = require("./spaceCenter");
const flightSchema = require("./flight");
const bookingSchema = require("./booking");


const baseSchema = gql `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
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