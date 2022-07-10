const spaceCenterService = require("../services/SpaceCenterService");
const { UserInputError } = require("apollo-server-koa");

exports.findAll = async(__, args) => {
    return await spaceCenterService.findAll(args);
};

exports.findOne = async(__, args) => {
    if (!args.id && !args.uid) {
        throw new UserInputError("Specify id or uid of the space center");
    }
    return await spaceCenterService.findOne(args);
};

exports.launchSite = async(flight) => {
    return await spaceCenterService.findById(flight.launchSite);
};

exports.landingSite = async(flight) => {
    return await spaceCenterService.findById(flight.landingSite);
};

exports.findByPlanetCode = async(planet, args) => {
    return await spaceCenterService.findByPlanetCode(planet.code, args.limit);
};