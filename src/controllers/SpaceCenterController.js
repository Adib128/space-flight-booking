const spaceCenterService = require("../services/SpaceCenterService");
const { UserInputError } = require("apollo-server-koa");

/**
 * Return array of spaceCenters
 * @param {Object} args
 * @return {Array} spaceCenters
 */
exports.findAll = async(__, args) => {
    return await spaceCenterService.findAll(args);
};


/**
 * Return spaceCenter details by ID
 * @param {Object} args
 * @return {Object} spaceCenter
 */
exports.findOne = async(__, args) => {
    // Check if id or uid sent as argument or throw Error
    if (!args.id && !args.uid) {
        throw new UserInputError("Specify id or uid of the space center");
    }
    return await spaceCenterService.findOne(args);
};

/**
 * Return spaceCenter details by launchSite
 * @param {Object} flight
 * @return {Object} spaceCenter
 */
exports.launchSite = async(flight) => {
    return await spaceCenterService.findById(flight.launchSite);
};

/**
 * Return spaceCenter details by landingSite
 * @param {Object} flight
 * @return {Object} spaceCenter
 */
exports.landingSite = async(flight) => {
    return await spaceCenterService.findById(flight.landingSite);
};

/**
 * Return array of spaceCenters by planet code
 * @param {Object} planet
 * @param {Object} args
 * @return {Object} spaceCenter
 */
exports.findByPlanetCode = async(planet, args) => {
    return await spaceCenterService.findByPlanetCode(planet.code, args.limit);
};