const { GraphQLDateTime } = require("graphql-iso-date");
const planetController = require("../controllers/PlanetController");
const spaceCenterController = require("../controllers/SpaceCenterController");
const flightController = require("../controllers/FlightController");
const bookingController = require("../controllers/BookingController");

const resolvers = {
    Query: {
        planets: planetController.findAll,
        spaceCenters: spaceCenterController.findAll,
        spaceCenter: spaceCenterController.findOne,
        flights: flightController.findAll,
        flight: flightController.findOne,
        bookings: bookingController.findAll,
        booking: bookingController.findOne,
    },

    Mutation: {
        scheduleFlight: flightController.create,
        bookFlight: bookingController.create,
    },

    Planet: {
        spaceCenters: spaceCenterController.findByPlanetCode,
    },

    SpaceCenter: {
        planet: planetController.findByCode,
    },

    Flight: {
        launchSite: spaceCenterController.launchSite,
        landingSite: spaceCenterController.landingSite,
    },

    Booking: {
        flight: flightController.findOne,
    },

    DateTime: GraphQLDateTime,
};

module.exports = resolvers;