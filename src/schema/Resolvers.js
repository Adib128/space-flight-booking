const { GraphQLDateTime } = require("graphql-iso-date");
const planetController = require("../controllers/PlanetController");
const spaceCenterController = require("../controllers/SpaceCenterController");
const flightController = require("../controllers/FlightController");
const knex = require("../database/connect.js");


const resolvers = {
    Query: {
        planets: planetController.findAll,
        spaceCenters: spaceCenterController.findAll,
        spaceCenter: spaceCenterController.findOne,
        flights: flightController.findAll,
        flight: flightController.findOne,
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

    DateTime: GraphQLDateTime,
};

module.exports = { resolvers };