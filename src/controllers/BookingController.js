const knex = require("../database/connect.js");
const bookingService = require("../services/BookingService");

exports.findAll = async(__, args) => {
    return await bookingService.findAll(args);
};

exports.findOne = async(__, args) => {
    return await bookingService.findOne(args);
};

exports.create = async(__, args) => {
    const booking = {
        seatCount: args.input.seatCount,
        flight: args.input.flightId,
        email: args.input.email
    };
    const data = await knex("bookings").returning("id").insert(booking);
    return await bookingService.findOne(data[0]);
};