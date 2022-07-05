const knex = require("../database/connect.js");
const bookingService = require("../services/BookingService");

exports.findAll = async(__, args) => {
    return await bookingService.findAll(args);
};

exports.findOne = async(__, args) => {
    return await bookingService.findOne(args);
};