const bookingService = require("../services/BookingService");

exports.findAll = async(__, args) => {
    return await bookingService.findAll(args);
};

exports.findOne = async(__, args) => {
    return await bookingService.findOne(args);
};

exports.create = async(__, args) => {
    const insertedId = bookingService.create(args.input);
    return await bookingService.findOne(insertedId);
};