const flightController = require("../../controllers/FlightController");
const bookingController = require("../../controllers/BookingController");

const bookingResolvers = {
    Query: {
        bookings: bookingController.findAll,
        booking: bookingController.findOne,
    },

    Mutation: {
        bookFlight: bookingController.create,
    },

    Booking: {
        flight: flightController.findByBookingId,
    },
};

module.exports = bookingResolvers;