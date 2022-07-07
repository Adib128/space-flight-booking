const flightService = require("../services/FlightService");

exports.findAll = async(__, args) => {
    return await flightService.findAll(args);
};

exports.findOne = async(__, args) => {
    return await flightService.findOne(args);
};

exports.create = async(__, args) => {
    const insertedId = flightService.create(args.input);
    return await flightService.findOne(insertedId);
};