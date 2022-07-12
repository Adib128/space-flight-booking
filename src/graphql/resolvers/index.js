const { GraphQLDateTime, GraphQLDate } = require("graphql-iso-date");
const _ = require("lodash");

const planetResolver = require("./planet");
const spaceCenterResolver = require("./spaceCenter");
const flightResolver = require("./flight");
const bookingResolver = require("./booking");

const mainresolver = {
    DateTime: GraphQLDateTime,
    Date: GraphQLDate,
};

// Merge and export all resolvers
const resolvers = _.merge(
    mainresolver,
    planetResolver,
    spaceCenterResolver,
    flightResolver,
    bookingResolver
);
module.exports = resolvers;