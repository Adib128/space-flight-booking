const planetService = require("../services/PlanetService");

exports.findAll = async() => {
    return await planetService.findAll();
};

exports.findByCode = async(spaceCenter) => {
    return await planetService.findByCode('MER');
};