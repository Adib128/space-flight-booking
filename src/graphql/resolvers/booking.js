const { GraphQLDateTime, GraphQLDate } = require("graphql-iso-date");
const planetController = require("../../controllers/PlanetController");
const spaceCenterController = require("../../controllers/SpaceCenterController");
const flightController = require("../../controllers/FlightController");
const bookingController = require("../../controllers/BookingController");

const bookingResolvers = {
    Query: {
        bookings: bookingController.findAll,
        booking: bookingController.findOne,
    },

    Mutation: {
        bookFlight: bookingController.create,
    },

    Booking: {
        flight: flightController.findOne,
    }
};

module.exports = bookingResolvers;