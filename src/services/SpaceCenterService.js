const knex = require("../database/connect.js");
const { attachPaginate } = require("knex-paginate");
const paginationHandler = require("./utils");
attachPaginate();

const findAll = async(args) => {
    const spaceCenters = await knex("space_centers").paginate({
        perPage: args.pageSize,
        currentPage: args.page,
        isLengthAware: true,
    });
    return paginationHandler(flights);
};

const findOne = async(args) => {
    return await knex("space_centers").where(args).first();
};

const findById = async(id) => {
    return await knex("space_centers").where({ id: id }).first();
};

const findByPlanetCode = async(code, limit) => {
    return await knex("space_centers")
        .where({ planet_code: code })
        .select("*")
        .limit(limit);
};

module.exports = {
    findAll,
    findOne,
    findById,
    findByPlanetCode,
};