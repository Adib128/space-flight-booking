const planetController = require("../../controllers/PlanetController");
const spaceCenterController = require("../../controllers/SpaceCenterController");

const spaceCenterresolvers = {
    Query: {
        spaceCenters: spaceCenterController.findAll,
        spaceCenter: spaceCenterController.findOne
    },

    SpaceCenter: {
        planet: planetController.findByCode,
    },
};

module.exports = spaceCenterresolvers;