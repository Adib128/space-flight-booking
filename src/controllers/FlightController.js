const flightService = require("../services/FlightService");

/**
 * Return array of flights
 * @param {Object} args
 * @return {Array} flights
 */
exports.findAll = async(__, args) => {
    return await flightService.findAll(args);
};

/**
 * Return flight details by ID
 * @param {Object} args
 * @return {Object} flight
 */
exports.findOne = async(__, args) => {
    return await flightService.findOne(args.id);
};

/**
 * Return flight details by booking ID
 * @param {Object} booking
 * @return {Object} flight
 */
exports.findByBookingId = async(booking) => {
    return await flightService.findOne(booking.flight);
};

/**
 * Create new flight
 * @param {Object} args
 * @return {Object} flight
 */
exports.create = async(__, args) => {
    const insertedData = await flightService.create(args.input);
    return await flightService.findOne(insertedData.id);
};