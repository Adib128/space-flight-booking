const spaceCenterService = require("../services/SpaceCenterService");

exports.findAll = async(__, args) => {
    return await spaceCenterService.findAll(args);
};

exports.findOne = async(__, args) => {
    if (!args.id && !args.uid) {
        throw new Error("Specify id or uid of the space center");
    }
    return await this.spaceCenterService.findOne(args);
};

exports.launchSite = async(flight) => {
    return await this.spaceCenterService.findById(flight.launchSite);
};

exports.landingSite = async(flight) => {
    return await this.spaceCenterService.findById(flight.landingSite);
};

exports.findByPlanetCode = async(planet, args) => {
    return await spaceCenterService.findByPlanetCode(planet.code, args.limit);
};