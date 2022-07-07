const knex = require("../database/connect.js");

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
    return {
        pagination: {
            total: bookings.pagination.total,
            page: bookings.pagination.currentPage,
            pageSize: bookings.pagination.perPage,
        },
        nodes: bookings.data,
    };
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