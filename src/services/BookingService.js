const knex = require("../database/connect.js");
const { validateParamsOrThrowError, paginationHandler } = require("./utils");

const findAll = async(args) => {
    validateParamsOrThrowError(args.page, args.pageSize);
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

const findOne = async(args) => {
    return await knex("bookings").where(args).first();
};

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