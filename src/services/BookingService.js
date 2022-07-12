const knex = require("../database/connect.js");
const { validateParamsOrThrowError, paginationHandler } = require("./utils");

/**
 * Find bookings in database 
 * @param {Object} args
 * @return {Array} bookings
 */
const findAll = async(args) => {
    // Validate page and pageSize argument or throw error
    validateParamsOrThrowError(args.page, args.pageSize);
    // Select bookings from database with pagination
    const bookings = await knex("bookings").where(function() {
        if (args.email) {
            this.where("email", args.email);
        }
    }).paginate({
        perPage: args.pageSize,
        currentPage: args.page,
        isLengthAware: true,
    });
    return paginationHandler(bookings);
};

/**
 * Find a booking in database by ID
 * @param {Object} args
 * @return {Object} booking
 */
const findOne = async(args) => {
    return await knex("bookings").where(args).first();
};

/**
 * Create and insert new booking in database
 * @param {Object} input
 * @return {number} id
 */
const create = async(input) => {
    const booking = {
        seatCount: input.seatCount,
        flight: input.flightId,
        email: input.email
    };
    const insertedData = await knex("bookings").returning("id").insert(booking);
    return insertedData[0];
}

module.exports = {
    findAll,
    findOne,
    create
};