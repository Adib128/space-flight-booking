const knex = require("../database/connect.js");
const flightService = require("../services/FlightService");

exports.findAll = async(__, args) => {
    return await flightService.findAll(args);
};

exports.findOne = async(__, args) => {
    return await flightService.findOne(args);
};

exports.create = async(__, args) => {
    const flight = {
        code: "a",
        launchSite: args.input.launchSiteId,
        landingSite: args.input.landingSiteId,
        departureAt: args.input.departureAt,
        seatCount: args.input.seatCount,
        availableSeats: args.input.seatCount,
    };
    const data = await knex("flights").returning("id").insert(flight);
    return await flightService.findOne(data[0]);
};