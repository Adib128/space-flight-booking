const knex = require("../database/connect.js");
const crypto = require("crypto");
const { validateParamsOrThrowError, paginationHandler } = require("./utils");

/**
 * Find flights in database 
 * @param {Object} args
 * @return {Array} flights
 */
const findAll = async(args) => {
    // Validate page and pageSize argument or throw error
    validateParamsOrThrowError(args.page, args.pageSize);
    // Select flights from database with pagination
    const flights = await knex("flights")
        .andWhere(function() {
            // Filter data with arguments
            this.where("seatCount", args.seatCount);
            if (args.from) {
                this.where("launchSite", args.from);
            }
            if (args.to) {
                this.where("landingSite", args.to);
            }
            if (args.departureDay) {
                this.where("departureAt", "=", args.departureDay);
            }
        })
        .paginate({
            perPage: args.pageSize,
            currentPage: args.page,
            isLengthAware: true,
        });
    return paginationHandler(flights);
};

/**
 * Find a flight in database by ID
 * @param {number} id
 * @return {Object} flight
 */
const findOne = async(id) => {
    return await knex("flights").where({ id: id }).first();
};

/**
 * Create and insert new flight in database
 * @param {Object} input
 * @return {number} id
 */
const create = async(input) => {
    const flight = {
        code: crypto.randomBytes(16).toString("hex"),
        launchSite: input.launchSiteId,
        landingSite: input.landingSiteId,
        departureAt: input.departureAt,
        seatCount: input.seatCount,
        availableSeats: input.seatCount,
    };
    const insertedData = await knex("flights").returning("id").insert(flight);
    return insertedData[0];
};

/**
 * Update flight available seat
 * @param {Object} input
 * @return {boolean} true if updated
 */
const updateAvailableSeats = async(input) => {
    const flight = await findOne(input.flightId);
    const availableSeats = flight.availableSeats - input.seatCount;
    return await knex("flights").where({ id: input.flightId }).update({
        availableSeats: availableSeats,
    });
};

module.exports = {
    findAll,
    findOne,
    create,
    updateAvailableSeats,
};