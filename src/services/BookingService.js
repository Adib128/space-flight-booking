const knex = require("../database/connect.js");

const findAll = async(args) => {
    const bookings = await knex("bookings").where({
        email: args.email
    }).paginate({
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

module.exports = {
    findAll,
    findOne
};