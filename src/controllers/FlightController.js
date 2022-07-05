const knex = require("../database/connect.js");
const flightService = require("../services/FlightService");

exports.findAll = async(__, args) => {
    return await flightService.findAll(args);
};

exports.findOne = async(__, args) => {
    return await flightService.findOne(args);
};