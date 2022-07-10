const planetController = require("../../controllers/PlanetController");
const spaceCenterController = require("../../controllers/SpaceCenterController");

const planetResolvers = {
    Query: {
        planets: planetController.findAll
    },

    Planet: {
        spaceCenters: spaceCenterController.findByPlanetCode,
    }
};

module.exports = planetResolvers;