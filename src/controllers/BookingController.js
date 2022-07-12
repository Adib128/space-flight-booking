const bookingService = require("../services/BookingService");
const flightService = require("../services/FlightService");

/**
 * Return array of bookings
 * @param {Object} args
 * @return {Array} bookings
 */
exports.findAll = async(__, args) => {
    return await bookingService.findAll(args);
};

/**
 * Return booking details by ID
 * @param {Object} args
 * @return {Object} booking
 */
exports.findOne = async(__, args) => {
    return await bookingService.findOne(args);
};

/**
 * Create new booking and update flight avalable seats
 * @param {Object} args
 * @return {Object} booking
 */
exports.create = async(__, args) => {
    // Create new booking
    const insertedId = await bookingService.create(args.input);
    // Update flight availableSeats by flightId
    await flightService.updateAvailableSeats(args.input);
    return await bookingService.findOne(insertedId);
};