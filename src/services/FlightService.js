const knex = require("../database/connect.js");

const findAll = async(args) => {
    const flights = await knex("flights").paginate({
        perPage: args.pageSize,
        currentPage: args.page,
        isLengthAware: true,
    });
    return {
        pagination: {
            total: flights.pagination.total,
            page: flights.pagination.currentPage,
            pageSize: flights.pagination.perPage,
        },
        nodes: flights.data,
    };
};
const findOne = async(args) => {
    return await knex("flights").where(args).first();
};

module.exports = {
    findAll,
    findOne,
};