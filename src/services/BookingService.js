const knex = require("../database/connect.js");
const paginationHandler = require("./utils");

const findAll = async(args) => {
    const query = knex("bookings");
    if (args.email) {
        query.where({
            email: args.email
        });
    }
    bookings = await query.paginate({
        perPage: args.pageSize,
        currentPage: args.page,
        isLengthAware: true,
    });
    return paginationHandler(flights);
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