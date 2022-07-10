const spaceCenterController = require("../../controllers/SpaceCenterController");
const flightController = require("../../controllers/FlightController");

const flightResolvers = {
    Query: {
        flights: flightController.findAll,
        flight: flightController.findOne
    },

    Mutation: {
        scheduleFlight: flightController.create
    },

    Flight: {
        launchSite: spaceCenterController.launchSite,
        landingSite: spaceCenterController.landingSite,
    }
};

module.exports = flightResolvers;