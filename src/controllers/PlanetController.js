const planetService = require("../services/PlanetService");

/**
 * Return array of planets
 * @return {Array} planets
 */
exports.findAll = async() => {
    return await planetService.findAll();
};

/**
 * Return planet details by code
 * @param {Object} spaceCenter
 * @return {Object} planet
 */
exports.findByCode = async(spaceCenter) => {
    return await planetService.findByCode(spaceCenter.planet_code);
};